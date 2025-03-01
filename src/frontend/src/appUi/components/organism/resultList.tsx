import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { EducationLevel } from "./topNavbarTabs";

import React from "react";

import { IconWrapper } from "../atoms/icon";
import { Texts } from "../atoms/text";
import { Badge } from "../../../components/ui/badge";
import { FileText, Filter } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Loading from "../atoms/loading";
import CustomDialog from "../atoms/CustomDialog";
import { Table, TableBody, TableCell, TableRow } from "../../../../src/components/ui/table";
import { TableHeader } from "../atoms/tableHeader";

interface ResultsListProps {
  results: any[];
  selectedYear: string;
  selectedLevel: EducationLevel;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  results,
  selectedYear,
  selectedLevel,
}) => {
  console.log("results===", results);
  const headers = ["Course Name", "Course Marks"];
  return (
    <Card>
      <CardHeader className="pb-3 border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Examination Results</CardTitle>
            <Texts variant="subtitle">
              {selectedLevel} • {selectedYear} • Showing {results.length}{" "}
              results
            </Texts>
          </div>
          <Badge
            variant="outline"
            className="flex rounded-full py-2 items-center"
          >
            <IconWrapper icon={Filter} size={4} className="mr-1 text-black" />
            {selectedYear}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {results.length > 0 ? (
          <div className="divide-y">
            {results.map((result) => (
              <div
                key={result.id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-medium">{result.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
                    <span className="flex items-center">
                      <IconWrapper icon={FileText} size={4} className="mr-1" />
                      {result.regNumber}
                    </span>
                    <span>•</span>
                    <span>{result.level}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-lg">
                      {result.totalMarks}
                    </span>
                  </div>
                  <CustomDialog
                    button="View Details"
                    customStyle="shadow-inner text-black text-xs"
                  >
                    <div className="flex flex-col gap-4 text-sm text-stone-600">
                      <h1 className="text-left bg-gray-200 w-fit px-2 text-sm text-black">
                        St. Details
                      </h1>
                      <div className="">
                        <p className="">
                          <span className="font-bold text-black">Name:</span>
                          {result.name}
                        </p>
                        <p className="">
                          <span className="font-bold text-black">Reg Number:</span>
                          {result.registrationNumber}
                        </p>
                        <Table>
                          <TableHeader headers={headers} />
                          <TableBody>
                            {result?.scores?.length === 0 ? (
                              <TableRow>
                                <TableCell
                                  colSpan={6}
                                  className="text-center h-32 text-muted-foreground"
                                >
                                  No results.scores distributed yet.
                                </TableCell>
                              </TableRow>
                            ) : (
                              result?.scores?.map((course:any, index:number) => (
                                <TableRow key={index}>
                                  <TableCell>{course.course}</TableCell>
                                  <TableCell>
                                    {course.marks}
                                  </TableCell>
                                </TableRow>
                              ))
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    <div className="text-sm text-stone-600">
                      <div className="">
                        <h1 className=""><span className="font-bold text-black">Assigned School:</span>{result.assignedSchool}</h1>
                        <p className=""><span className="font-bold text-black">Reason:</span>{result.explanation}</p>
                      </div>
                    </div>
                  </CustomDialog>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <Loading />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
