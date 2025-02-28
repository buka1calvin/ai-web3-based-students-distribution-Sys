import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table";

  
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
  
  interface StudentDistributionTableProps {
    students: Student[];
  }
  
  export const StudentDistributionTable = ({ students }: StudentDistributionTableProps) => {
    const headers = [
      "Student Name",
      "Registration",
      "Total Marks",
      "Assigned School",
      "Allocated Combination",
      "Reason"
    ];
    
    return (
      <div className="border rounded-md">
        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-32 text-muted-foreground">
                  No students distributed yet.
                </TableCell>
              </TableRow>
            ) : (
              students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.registrationNumber}</TableCell>
                  <TableCell>{student.totalMarks || "N/A"}</TableCell>
                  <TableCell>{student.assignedSchool || "No match"}</TableCell>
                  <TableCell>
                    {student.allocatedCombinations && student.allocatedCombinations.length > 0 
                      ? student.allocatedCombinations.map(c => c.combinationName).join(", ")
                      : "N/A"
                    }
                  </TableCell>
                  <TableCell className="max-w-md">{student.explanation || "N/A"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    );
  };
  