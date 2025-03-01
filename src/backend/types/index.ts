export enum StudentLevel {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  UNIVERSITY = "university",
}

export enum StudentStatus {
  EXCELLENT = "excellent",
  GOOD = "good",
  NORMAL = "normal",
  DAILY = "daily",
}

export type Combination = {
  combinationName: string;
  school: string;
};

export type Distribution = {
  id: string;
  level: string;
  name: string;
  registrationNumber: string;
  assignedSchool: string;
  allocatedCombinations?: Combination[];
  explanation: string;
  totalMarks: number;
  createdAt: Date;
};

export type DistributionData = {
  year: string;
  level: string;
  distributions: Distribution[];
  lastUpdated: Date;
};
