export const students = [
  {
    id: "STU011",
    name: "Ethan Williams",
    level: "P-Level",
    scores: [
      { course: "Mathematics", marks: 88 },
      { course: "English", marks: 85 },
    ],
    preference: ["SCH006", "SCH007"],
    registrationNumber: "REG1011",
    totalMarks: 410,
    selectedCombinations: null,
  },
  {
    id: "STU012",
    name: "Ava Johnson",
    level: "O-Level",
    scores: [
      { course: "Physics", marks: 82 },
      { course: "Chemistry", marks: 87 },
    ],
    preference: ["SCH008", "SCH009"],
    registrationNumber: "REG1012",
    totalMarks: 405,
    selectedCombinations: [
      { combinationName: "PCM", school: "Rwanda Science Academy" },
    ],
  },
  {
    id: "STU013",
    name: "Mia Brown",
    level: "P-Level",
    scores: [
      { course: "Biology", marks: 79 },
      { course: "Geography", marks: 80 },
    ],
    preference: ["SCH006", "SCH010"],
    registrationNumber: "REG1013",
    totalMarks: 370,
    selectedCombinations: null,
  },
  {
    id: "STU014",
    name: "Noah Davis",
    level: "O-Level",
    scores: [
      { course: "History", marks: 85 },
      { course: "Economics", marks: 88 },
    ],
    preference: ["SCH007", "SCH008"],
    registrationNumber: "REG1014",
    totalMarks: 410,
    selectedCombinations: [
      { combinationName: "HEG", school: "Kigali Modern Academy" },
    ],
  },
  {
    id: "STU015",
    name: "Liam Anderson",
    level: "P-Level",
    scores: [
      { course: "Chemistry", marks: 92 },
      { course: "Mathematics", marks: 90 },
    ],
    preference: ["SCH009", "SCH010"],
    registrationNumber: "REG1015",
    totalMarks: 420,
    selectedCombinations: null,
  },
  {
    id: "STU016",
    name: "Sophia Martinez",
    level: "O-Level",
    scores: [
      { course: "Physics", marks: 88 },
      { course: "Computer Science", marks: 85 },
    ],
    preference: ["SCH006", "SCH008"],
    registrationNumber: "REG1016",
    totalMarks: 410,
    selectedCombinations: [
      { combinationName: "MPC", school: "Rwanda Science Academy" },
    ],
  },
  {
    id: "STU017",
    name: "Oliver Thomas",
    level: "P-Level",
    scores: [
      { course: "English", marks: 80 },
      { course: "Geography", marks: 78 },
    ],
    preference: ["SCH007", "SCH009"],
    registrationNumber: "REG1017",
    totalMarks: 370,
    selectedCombinations: null,
  },
  {
    id: "STU018",
    name: "Emma Wilson",
    level: "O-Level",
    scores: [
      { course: "Mathematics", marks: 89 },
      { course: "Chemistry", marks: 84 },
    ],
    preference: ["SCH008", "SCH010"],
    registrationNumber: "REG1018",
    totalMarks: 405,
    selectedCombinations: [
      { combinationName: "MCB", school: "Rwanda Science Academy" },
    ],
  },
  {
    id: "STU019",
    name: "Daniel Garcia",
    level: "P-Level",
    scores: [
      { course: "History", marks: 76 },
      { course: "Kinyarwanda", marks: 79 },
    ],
    preference: ["SCH006", "SCH007"],
    registrationNumber: "REG1019",
    totalMarks: 360,
    selectedCombinations: null,
  },
  {
    id: "STU020",
    name: "Isabella Robinson",
    level: "O-Level",
    scores: [
      { course: "Physics", marks: 91 },
      { course: "Biology", marks: 87 },
    ],
    preference: ["SCH009", "SCH010"],
    registrationNumber: "REG1020",
    totalMarks: 420,
    selectedCombinations: [
      { combinationName: "PCB", school: "Kigali Modern Academy" },
    ],
  },
];

export const schools = [
  {
    id: "SCH006",
    name: "Rwanda International School",
    status: "excellent",
    level: "O-Level",
    owner: "Private",
    capacity: 450,
    availableSlots: 90,
    otherSchoolDetails: {},
  },
  {
    id: "SCH007",
    name: "Kigali Modern Academy",
    status: "good",
    level: "O-Level",
    owner: "Government",
    capacity: 320,
    availableSlots: 120,
    otherSchoolDetails: {},
  },
  {
    id: "SCH008",
    name: "Rwanda Science Academy",
    status: "excellent",
    level: "A-Level",
    combinations: ["PCM", "PCB", "MCB", "MPC"],
    owner: "Government",
    capacity: 280,
    availableSlots: {
      PCM: { totalSlots: 50, remainingSlots: 15 },
      PCB: { totalSlots: 45, remainingSlots: 20 },
      MCB: { totalSlots: 40, remainingSlots: 10 },
      MPC: { totalSlots: 35, remainingSlots: 12 },
    },
    otherSchoolDetails: {},
  },
  {
    id: "SCH009",
    name: "National Science School",
    status: "excellent",
    level: "A-Level",
    combinations: ["PCB", "MCB"],
    owner: "Government",
    capacity: 300,
    availableSlots: 80,
    otherSchoolDetails: {},
  },
  {
    id: "SCH010",
    name: "Elite Learning Academy",
    status: "good",
    level: "O-Level",
    owner: "Private",
    capacity: 350,
    availableSlots: 90,
    otherSchoolDetails: {},
  },
];

export const demoData = [
  {
    year: "2022",
    level: "O-Level",
    distributions: [
      {
        id: "STU012",
        name: "Ava Johnson",
        level: "O-Level",
        registrationNumber: "REG1012",
        assignedSchool: "Rwanda Science Academy",
        allocatedCombinations: [
          { combinationName: "PCM", school: "Rwanda Science Academy" },
        ],
        explanation:
          "Assigned based on preference and availability in PCM combination.",
        scores: [
          { course: "Physics", marks: 82 },
          { course: "Chemistry", marks: 87 },
        ],
        totalMarks: 405,
        createdAt: new Date("2022-02-15"),
      },
      {
        id: "STU014",
        name: "Noah Davis",
        level: "O-Level",
        registrationNumber: "REG1014",
        assignedSchool: "Kigali Modern Academy",
        allocatedCombinations: [
          { combinationName: "HEG", school: "Kigali Modern Academy" },
        ],
        explanation: "Assigned based on preference and academic performance.",
        scores: [
          { course: "History", marks: 85 },
          { course: "Economics", marks: 88 },
        ],
        totalMarks: 410,
        createdAt: new Date("2022-02-18"),
      },
    ],
    lastUpdated: new Date("2022-12-31"),
  },
  {
    year: "2023",
    level: "P-Level",
    distributions: [
      {
        id: "STU015",
        name: "Liam Anderson",
        level: "P-Level",
        registrationNumber: "REG1015",
        assignedSchool: "National Science School",
        explanation: "Assigned based on high marks and school preference.",
        scores: [
          { course: "Chemistry", marks: 92 },
          { course: "Mathematics", marks: 90 },
        ],
        totalMarks: 420,
        createdAt: new Date("2023-02-12"),
      },
      {
        id: "STU017",
        name: "Oliver Thomas",
        level: "P-Level",
        registrationNumber: "REG1017",
        assignedSchool: "Kigali Modern Academy",
        explanation: "Assigned due to availability and academic performance.",
        scores: [
          { course: "English", marks: 80 },
          { course: "Geography", marks: 78 },
        ],
        totalMarks: 370,
        createdAt: new Date("2023-02-14"),
      },
    ],
    lastUpdated: new Date("2023-12-31"),
  },
  {
    year: "2024",
    level: "O-Level",
    distributions: [
      {
        id: "STU016",
        name: "Sophia Martinez",
        level: "O-Level",
        registrationNumber: "REG1016",
        assignedSchool: "Rwanda Science Academy",
        allocatedCombinations: [
          { combinationName: "MPC", school: "Rwanda Science Academy" },
        ],
        explanation:
          "Assigned to MPC due to academic preference and availability.",
        scores: [
          { course: "Physics", marks: 88 },
          { course: "Computer Science", marks: 85 },
        ],
        totalMarks: 410,
        createdAt: new Date("2024-02-10"),
      },
      {
        id: "STU018",
        name: "Emma Wilson",
        level: "O-Level",
        registrationNumber: "REG1018",
        assignedSchool: "Rwanda Science Academy",
        scores: [
          { course: "Mathematics", marks: 89 },
          { course: "Chemistry", marks: 84 },
        ],
        allocatedCombinations: [
          { combinationName: "MCB", school: "Rwanda Science Academy" },
        ],
        explanation: "Assigned based on merit and availability in MCB.",
        totalMarks: 405,
        createdAt: new Date("2024-02-13"),
      },
    ],
    lastUpdated: new Date("2024-12-31"),
  },
  {
    year: "2025",
    level: "O-Level",
    distributions: [
      {
        id: "STU020",
        name: "Isabella Robinson",
        level: "O-Level",
        registrationNumber: "REG1020",
        assignedSchool: "Kigali Modern Academy",
        allocatedCombinations: [
          { combinationName: "PCB", school: "Kigali Modern Academy" },
        ],
        scores: [
          { course: "Physics", marks: 91 },
          { course: "Biology", marks: 87 },
        ],
        explanation:
          "Assigned to PCB based on school preference and academic performance.",
        totalMarks: 420,
        createdAt: new Date("2025-02-09"),
      },
    ],
    lastUpdated: new Date("2025-12-31"),
  },
];
