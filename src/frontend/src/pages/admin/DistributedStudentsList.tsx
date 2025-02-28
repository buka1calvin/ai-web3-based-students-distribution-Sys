import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { DistributionTemplate } from "../../appUi/components/templates/distributionTemplate";

export type Combination = {
  combinationName: string;
  school: string;
};

interface Student {
  id: string | number;
  name: string;
  registrationNumber: string;
  score?: number;
  selectedCombinations?: Combination[];
  level: string;
  assignedSchool?: string;
  allocatedCombinations?: Combination[];
  explanation?: string;
  totalMarks: number;
  createdAt?: Date;
}

interface School {
  name: string;
  level: string;
  status: string;
  capacity: number;
  combinations: string[];
}

// Sample test data
const testStudents = [
  {
    id: 1,
    name: "John Doe",
    registrationNumber: "S12345",
    score: 85,
    selectedCombinations: [
      { combinationName: "PCM", school: "School A" },
      { combinationName: "PCB", school: "School B" },
    ],
    level: "secondary",
    totalMarks: 85,
  },
  {
    id: 2,
    name: "Jane Smith",
    registrationNumber: "S67890",
    score: 92,
    selectedCombinations: [
      { combinationName: "HKL", school: "School C" },
      { combinationName: "HGE", school: "School D" },
    ],
    level: "secondary",
    totalMarks: 92,
  },
  {
    id: 3,
    name: "Michael Johnson",
    registrationNumber: "P23456",
    score: 75,
    selectedCombinations: [],
    level: "primary",
    totalMarks: 75,
  },
];

const testSchools = [
  {
    name: "School A",
    level: "secondary",
    status: "excellent",
    capacity: 100,
    combinations: ["PCM", "PCB", "CBG"],
  },
  {
    name: "School B",
    level: "secondary",
    status: "good",
    capacity: 120,
    combinations: ["PCB", "CBG", "HGE"],
  },
  {
    name: "School C",
    level: "secondary",
    status: "normal",
    capacity: 150,
    combinations: ["HKL", "HGE", "ECA"],
  },
];

const DistributionPage: React.FC = () => {
  const [distributedStudents, setDistributedStudents] = useState<Student[]>([]);
  const [isDistributing, setIsDistributing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [currentYear, setCurrentYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [currentLevel, setCurrentLevel] = useState<string>("secondary");

  const getSchools = async () => {
    try {
      const response = await axios.get(
        `${(import.meta as any).env.VITE_CANISTER_ORIGIN}/schools`
      );
      setSchools(response.data);
    } catch (error) {
      console.error("Error fetching schools:", error);
      toast.error("Failed to fetch schools data");
    }
  };

  const getStudents = async () => {
    try {
      const response = await axios.get(
        `${(import.meta as any).env.VITE_CANISTER_ORIGIN}/students`
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to fetch student data");
    }
  };

  const getDistributions = async (year: string, level: string) => {
    try {
      const response = await axios.get(
        `${
          (import.meta as any).env.VITE_CANISTER_ORIGIN
        }/distribution/${year}/${level}`
      );

      if (response.data.success && response.data.data) {
        setDistributedStudents(response.data.data.distributions || []);
        toast.success(
          `Loaded ${response.data.data.distributions.length} distributions`
        );
      }
    } catch (error) {
      console.error("Error fetching distributions:", error);
      // If 404, this is normal for new distributions
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setDistributedStudents([]);
      } else {
        toast.error("Failed to fetch distribution data");
      }
    }
  };

  useEffect(() => {
    getSchools();
    getStudents();
  }, []);

  const rankStudentPreferences = async (
    student: Student,
    schools: School[]
  ) => {
    const prompt = `
Distribute the student to the appropriate school based on the following details:

- Name: ${student.name}
- Registration: ${student.registrationNumber}
- Marks: ${JSON.stringify(student.score || 0)}
- Preferred Combinations: ${JSON.stringify(student.selectedCombinations || [])}
- Level: ${student.level}
- Total marks: ${student.totalMarks}

School Info: ${JSON.stringify(schools)}

Instructions:
- if ${
      student.level === "primary"
    } distribute students to O-Level without combination just according to the high marks and excellent school. do not consider more on course while distributing
  high total marks do not provide to him combination. only secondary students are allowed to have combination
- If the student is at the primary level, assign them to a secondary school based on their total marks.
- If the student has marks less than 50, assign them to a Daily school.
- Secondary students should be assigned to schools based on their selected combinations and total marks.
- Prioritize assignment to Excellent schools when possible.
- If a secondary student's preferred combination is not available, assign them to a school with a matching subject or the best available option.
- Secondary students should sent to A'Level school if the total marks is less than 30 assigned school should be to stay
- Reason should clear explain pointer as talking to the student

Return JSON:
{
  "studentName": "${student.name}",
  "registration": "${student.registrationNumber}",
  "totalMarks": ${student.totalMarks},
  "allocatedSchool": "School A",
  "level": "${student.level}",
  "allocatedCombinations": [{"combinationName": "PCM", "school": "School A"}],
  "reason": "Assigned to Excellent school based on high total marks; preferred combination available."
}
`;

    try {
      const response = await axios.post(
        "https://api.cohere.ai/generate",
        {
          model: "command-r-plus-04-2024",
          prompt: prompt,
          max_tokens: 300,
          temperature: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${
              (import.meta as any).env.VITE_OPENAI_API_KEY
            }`,
          },
        }
      );

      const jsonMatch = response.data.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const allocation = JSON.parse(jsonMatch[0]);
        return allocation;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error distributing student:", error);
      return {
        studentName: student.name,
        registration: student.registrationNumber,
        totalMarks: student.totalMarks,
        allocatedSchool: "Error in distribution",
        level: student.level,
        allocatedCombinations: [],
        reason: "An error occurred during distribution",
      };
    }
  };

  const processDistributions = async (year: string, level: string) => {
    if (isDistributing || students.length === 0) return;

    setIsDistributing(true);
    try {
      const filteredStudents = students.filter(
        (student) => student.level === level
      );

      if (filteredStudents.length === 0) {
        toast.error(`No students found for ${level} level`);
        setIsDistributing(false);
        return;
      }

      const distributionPromises = filteredStudents.map((student) =>
        rankStudentPreferences(student, schools)
      );
      const distributed = await Promise.all(distributionPromises);

      const updatedStudents = filteredStudents.map((student, index) => ({
        ...student,
        assignedSchool: distributed[index].allocatedSchool,
        allocatedCombinations: distributed[index].allocatedCombinations || [],
        explanation: distributed[index].reason,
      }));

      setDistributedStudents(updatedStudents);
      setCurrentYear(year);
      setCurrentLevel(level);
      toast.success("Students distributed successfully");
    } catch (error) {
      console.error("Error distributing students:", error);
      toast.error("Failed to distribute students");
    } finally {
      setIsDistributing(false);
    }
  };

  const handleDistribute = (year: string, level: string) => {
    if (students.length === 0) {
      toast.error("No students available to distribute");
      return;
    }
    processDistributions(year, level);
  };

  const handleSaveDistribution = async (year: string, level: string) => {
    if (distributedStudents.length === 0) {
      toast.error("No distributed students to save");
      return;
    }

    setIsSaving(true);
    try {
      // Format the data according to backend expectations
      const distributionsData = {
        year,
        level,
        distributions: distributedStudents.map((student) => ({
          name: student.name,
          registrationNumber: student.registrationNumber,
          assignedSchool: student.assignedSchool,
          allocatedCombinations: student.allocatedCombinations,
          explanation: student.explanation,
          totalMarks: student.totalMarks,
        })),
      };

      const response = await axios.post(
        `${(import.meta as any).env.VITE_CANISTER_ORIGIN}/distribution`,
        distributionsData
      );

      if (response.data.success) {
        toast.success("Distribution saved successfully");
      } else {
        throw new Error(response.data.message || "Failed to save distribution");
      }
    } catch (error) {
      console.error("Error saving distribution:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to save distribution"
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleImport = (importedData: any[], year: string, level: string) => {
    if (!importedData || importedData.length === 0) {
      toast.error("No data found in imported file");
      return;
    }

    try {
      // Transform imported data to match Student interface
      const transformedData = importedData.map((item, index) => ({
        id: index + 1,
        name: item.name || item.Name || "",
        registrationNumber: item.registrationNumber || item.Registration || "",
        score: Number(item.score || item.Score || 0),
        selectedCombinations: item.selectedCombinations || [],
        level: level, // Use the selected level
        totalMarks: Number(item.totalMarks || item.TotalMarks || 0),
      }));

      setStudents(transformedData);
      setCurrentYear(year);
      setCurrentLevel(level);
      toast.success(
        `Imported ${transformedData.length} students for ${year} - ${level}`
      );
    } catch (error) {
      console.error("Error processing imported data:", error);
      toast.error("Failed to process imported data");
    }
  };

  const handleUseTestData = () => {
    setStudents(testStudents);
    setSchools(testSchools);
    toast.success("Test data loaded");
  };

  return (
    <DistributionTemplate
      title="Student Distribution"
      onDistribute={handleDistribute}
      onSave={handleSaveDistribution}
      onImport={handleImport}
      onUseTestData={handleUseTestData}
      isDistributing={isDistributing}
      isSaving={isSaving}
      distributedStudents={distributedStudents}
    />
  );
};

export default DistributionPage;
