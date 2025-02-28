import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { DistributionTemplate } from "../../appUi/components/templates/distributionTemplate";

export type Combination = {
  combinationName: string;
  school: string;
};

export interface ImportedDataInfo {
  type: "students" | "schools";
  year: string;
  level: string;
  count: number;
  data: any[];
}

interface Student {
  id: string | number;
  name: string;
  registrationNumber: string;
  scores?: Array<{ course: string; marks: number }>;
  totalMarks: number;
  level: string;
  preference?: string[];
  selectedCombinations?: Combination[] | null;
  assignedSchool?: string;
  explanation?: string;
  allocatedCombinations: Combination[] | null;
  createdAt?: Date;
}

enum Status {
  EXCELLENT = "excellent",
  GOOD = "good",
  NORMAL = "normal",
  DAILY = "daily",
}

type School = {
  id: string;
  name: string;
  status: Status;
  level: "O-Level" | "A-Level" | "TVET" | "Primary";
  combinations?: string[];
  capacity: number;
  location?: string;
  code?: string;
  availableSlots:
    | number
    | Record<string, { totalSlots: number; remainingSlots: number }>;
  otherSchoolDetails?: any;
};

const DistributionPage: React.FC = () => {
  const [distributedStudents, setDistributedStudents] = useState<Student[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [isDistributing, setIsDistributing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [currentYear, setCurrentYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [currentLevel, setCurrentLevel] = useState<string>("O-Level");
  const [importedStudentsCount, setImportedStudentsCount] = useState<number>(0);
  const [importedSchoolsCount, setImportedSchoolsCount] = useState<number>(0);
  const [importedStudents, setImportedStudents] = useState<any[]>([]);
  const [importedSchools, setImportedSchools] = useState<any[]>([]);
  const [importedDataList, setImportedDataList] = useState<ImportedDataInfo[]>(
    []
  );

  const parseStudentData = (students: any[]): Student[] => {
    return students.map((student) => {
      try {
        const parsedStudent = {
          ...student,
          scores:
            typeof student.scores === "string"
              ? JSON.parse(student.scores)
              : student.scores,
          preference:
            typeof student.preference === "string"
              ? JSON.parse(student.preference)
              : student.preference,
          selectedCombinations:
            typeof student.selectedCombinations === "string"
              ? JSON.parse(student.selectedCombinations)
              : student.selectedCombinations,
          totalMarks:
            typeof student.totalMarks === "string"
              ? parseFloat(student.totalMarks)
              : student.totalMarks,
        };
        return parsedStudent;
      } catch (error) {
        console.error(`Error parsing data for student ${student.name}:`, error);
        // Return student with empty arrays for fields that couldn't be parsed
        return {
          ...student,
          scores: [],
          preference: [],
          selectedCombinations: [],
          totalMarks:
            typeof student.totalMarks === "string"
              ? parseFloat(student.totalMarks) || 0
              : student.totalMarks || 0,
        };
      }
    });
  };

  const rankStudentPreferences = async (
    student: Student,
    schools: School[]
  ) => {
    const parsedStudent = {
      ...student,
      scores:
        typeof student.scores === "string"
          ? JSON.parse(student.scores)
          : student.scores,
      preference:
        typeof student.preference === "string"
          ? JSON.parse(student.preference)
          : student.preference,
      selectedCombinations:
        typeof student.selectedCombinations === "string"
          ? JSON.parse(student.selectedCombinations)
          : student.selectedCombinations,
      totalMarks:
        typeof student.totalMarks === "string"
          ? parseFloat(student.totalMarks)
          : student.totalMarks,
    };
    const prompt = `
  # Student Distribution Task
  Distribute the student to an appropriate Rwandan school based on the following information:
  
  ## Student Details
  - Name: ${parsedStudent.name}
  - Registration Number: ${parsedStudent.registrationNumber}
  - Individual Subject Marks: ${JSON.stringify(parsedStudent.scores || [])}
  - Total Marks: ${parsedStudent.totalMarks}
  - Current Level: ${parsedStudent.level}
  - Preferred Schools: ${JSON.stringify(parsedStudent.preference || [])}
  - Preferred Combinations: ${JSON.stringify(
    parsedStudent.selectedCombinations || []
  )}
  
  ## Available Schools
  ${JSON.stringify(schools, null, 2)}
  
  ## Educational System Rules
  ### Primary to O-Level Transition
  - Primary school students are assigned to O-Level schools based primarily on their total marks
  - Students with total marks below 30% cannot proceed to O-Level and must repeat
  - Students with total marks between 30-50% can only be assigned to Daily or Normal schools
  - Students with total marks above 50% can be assigned to Good or Excellent schools based on availability
  
  ### O-Level to A-Level Transition
  - O-Level students are assigned to A-Level schools based on both their total marks and subject-specific performance
  - Students must have at least 50% total marks to qualify for A-Level
  - Students with below 30% total marks must repeat O-Level
  - Students between 30-50% should be directed to TVET programs
  
  ### Subject Requirements for A-Level Combinations
  - PCM (Physics, Chemistry, Mathematics): Requires strong performance in all three subjects (minimum 60% in each)
  - PCB (Physics, Chemistry, Biology): Requires strong performance in science subjects
  - MCB (Mathematics, Chemistry, Biology): Requires strong performance in Mathematics and sciences
  - MPG (Mathematics, Physics, Geography): Requires good performance in Mathematics and Physics
  - MEG (Mathematics, Economics, Geography): Requires good performance in Mathematics
  - HEG (History, Economics, Geography): Requires good performance in humanities
  - LFK (Literature, French, Kinyarwanda): Requires strong language skills
  - MPC (Mathematics, Physics, Computer Science): Requires strong performance in Mathematics and logical subjects
  - TVET programs: Suitable for students with practical skills and at least 30% total marks
  
  ### School Assignment Priorities
  - Excellent schools: Reserved for top-performing students (above 70% total marks)
  - Good schools: For strong students (above 60% total marks)
  - Normal schools: For average students (above 50% total marks)
  - Daily schools: For students with at least 30% total marks
  
  ## Task Instructions
  1. Analyze the student's academic performance.
  2. If student is from primary level, assess eligibility for O-Level based on total marks only.
  3. If student is from O-Level, assess eligibility for A-Level combinations or TVET based on subject-specific performance.
  4. Match the student to an appropriate school based on their performance and school availability.
  5. Prioritize the student's preferred combinations when possible.
  6. Consider school capacity and available slots.
  7. Provide a clear, detailed explanation for the assignment decision.
  
  ## Output Format
  Return a JSON object with the following structure:
  {
    "studentName": "${parsedStudent.name}",
    "registration": "${parsedStudent.registrationNumber}",
    "totalMarks": ${parsedStudent.totalMarks},
    "allocatedSchool": "Name of assigned school",
    "level": "${
      parsedStudent.level === "Primary"
        ? "O-Level"
        : parsedStudent.level === "O-Level"
        ? "A-Level"
        : parsedStudent.level
    }",
    "allocatedCombinations": [{"combinationName": "Assigned combination", "school": "School name"}],
    "reason": "Detailed explanation of the assignment decision with specific references to the student's performance and the school's characteristics"
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
      console.error("Error during distribution:", error);
      return {
        studentName: parsedStudent.name,
        registration: parsedStudent.registrationNumber,
        totalMarks: parsedStudent.totalMarks,
        allocatedSchool: "Error in distribution",
        level: parsedStudent.level,
        allocatedCombinations: [],
        reason: "An error occurred during distribution",
      };
    }
  };

  // Update the processDistributions function to work with parsed data
  const processDistributions = async (year: string, level: string) => {
    if (isDistributing || students.length === 0) return;

    setIsDistributing(true);
    try {
      // Ensure students are properly parsed before filtering
      const parsedStudents = parseStudentData(students);
      const filteredStudents = parsedStudents.filter(
        (student) => student.level === level
      );

      if (filteredStudents.length === 0) {
        toast.error(`No students found for ${level} level`);
        setIsDistributing(false);
        return;
      }

      const distributionPromises = filteredStudents.map((student: any) =>
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
      const distributionsData = {
        year,
        level,
        distributions: distributedStudents.map((student) => ({
          ...student,
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
  const handleImport = (
    importedData: any[],
    year: string,
    level: string,
    dataType: "students" | "schools"
  ) => {
    if (!importedData || importedData.length === 0) {
      toast.error(`No ${dataType} data found in imported file`);
      return;
    }

    try {
      if (dataType === "students") {
        console.log("importedData", importedData);
        const transformedStudents = importedData.map((item, index) => {
          // Ensure marks don't exceed 100%
          const normalizedScores = item.scores
            ? item.scores.map((score: any) => ({
                ...score,
                marks: Math.min(score.marks, 100), // Cap at 100%
              }))
            : [];

          console.log("item", item);

          return {
            id: item.id || `S${index + 1}`,
            name: item.name || item.Name || "",
            registrationNumber:
              item.registrationNumber || item.Registration || `REG${index + 1}`,
            scores: normalizedScores,
            totalMarks: Math.min(
              Number(item.totalMarks || item.TotalMarks || 0),
              600
            ),
            level: item.level || level,
            preference: item.preference || [],
            selectedCombinations: item.selectedCombinations || null,
            allocatedCombinations: null,
          };
        });

        setStudents(transformedStudents);
        setImportedStudentsCount(transformedStudents.length);

        const newImportedData: ImportedDataInfo = {
          type: "students",
          year,
          level,
          count: transformedStudents.length,
          data: transformedStudents,
        };

        setImportedDataList((prev) => [...prev, newImportedData]);

        toast.success(
          `Imported ${transformedStudents.length} students for ${year} - ${level}`
        );
      } else {
        const transformedSchools = importedData.map((item, index) => {
          return {
            id: item.id || `SCH${index + 1}`,
            name: item.name || item.Name || "",
            status: item.status || Status.NORMAL,
            level: item.level || "O-Level",
            combinations: item.combinations || [],
            capacity: Number(item.capacity || 300),
            location: item.location || "",
            code: item.code || `${index + 1000}`,
            availableSlots: item.availableSlots || 100,
            otherSchoolDetails: item.otherSchoolDetails || {},
          };
        });

        setSchools(transformedSchools);
        setImportedSchoolsCount(transformedSchools.length);
        const newImportedData: ImportedDataInfo = {
          type: "schools",
          year,
          level,
          count: transformedSchools.length,
          data: transformedSchools,
        };

        setImportedDataList((prev) => [...prev, newImportedData]);

        toast.success(
          `Imported ${transformedSchools.length} schools for ${year}`
        );
      }

      setCurrentYear(year);
      setCurrentLevel(level);
    } catch (error) {
      console.error(`Error processing imported ${dataType} data:`, error);
      toast.error(`Failed to process imported ${dataType} data`);
    }
  };

  const handleUseTestData = () => {
    const generateTestStudents = (count: number, level: string): Student[] => {
      return Array.from({ length: count }, (_, i) => {
        const subjects = [
          "Mathematics",
          "English",
          "Science",
          "Physics",
          "Chemistry",
          "Biology",
          "Geography",
          "History",
        ];
        const scores = subjects.slice(0, 6).map((course) => ({
          course,
          marks: Math.floor(Math.random() * 60) + 40, // 40-100 marks
        }));

        const totalMarks = scores.reduce((sum, { marks }) => sum + marks, 0);

        return {
          id: `S${i + 1}`,
          name: `Student ${i + 1}`,
          registrationNumber: `REG${10000 + i}`,
          scores,
          totalMarks,
          level,
          preference: ["School A", "School B", "School C"],
          selectedCombinations:
            level === "O-Level"
              ? [
                  { combinationName: "PCM", school: "School A" },
                  { combinationName: "PCB", school: "School B" },
                ]
              : null,
          allocatedCombinations: null,
        };
      });
    };

    const generateTestSchools = (): School[] => {
      const schoolLevels = ["Primary", "O-Level", "A-Level", "TVET"];
      const statusOptions = [
        Status.EXCELLENT,
        Status.GOOD,
        Status.NORMAL,
        Status.DAILY,
      ];
      const combinations = ["PCM", "PCB", "MCB", "MEG", "HEG", "LFK", "MPC"];

      return Array.from({ length: 10 }, (_, i) => {
        const level = schoolLevels[i % 4] as
          | "O-Level"
          | "A-Level"
          | "TVET"
          | "Primary";
        const combinationSlots = combinations.reduce((acc, combo) => {
          acc[combo] = {
            totalSlots: 50,
            remainingSlots: 50 - Math.floor(Math.random() * 20),
          };
          return acc;
        }, {} as Record<string, { totalSlots: number; remainingSlots: number }>);

        return {
          id: `SCH${i + 1}`,
          name: `School ${String.fromCharCode(65 + i)}`,
          status: statusOptions[i % 4],
          level,
          combinations: level === "A-Level" ? combinations.slice(0, 3) : [],
          capacity: 300 + i * 50,
          location: `District ${Math.floor(i / 3) + 1}`,
          code: `${1000 + i}`,
          availableSlots: level === "A-Level" ? combinationSlots : 100,
        };
      });
    };

    const primaryTestStudents = generateTestStudents(20, "Primary");
    const oLevelTestStudents = generateTestStudents(30, "O-Level");
    const testSchools = generateTestSchools();

    const allTestStudents = [...primaryTestStudents, ...oLevelTestStudents];
    setStudents(allTestStudents);
    setSchools(testSchools);
    setImportedStudentsCount(allTestStudents.length);
    setImportedSchoolsCount(testSchools.length);

    setImportedDataList([
      {
        type: "students",
        year: currentYear,
        level: "Primary",
        count: primaryTestStudents.length,
        data: primaryTestStudents,
      },
      {
        type: "students",
        year: currentYear,
        level: "O-Level",
        count: oLevelTestStudents.length,
        data: oLevelTestStudents,
      },
      {
        type: "schools",
        year: currentYear,
        level: "All",
        count: testSchools.length,
        data: testSchools,
      },
    ]);

    toast.success("Test data loaded successfully");
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
      importedStudentsCount={importedStudentsCount}
      importedSchoolsCount={importedSchoolsCount}
      importedData={importedDataList}
    />
  );
};

export default DistributionPage;
