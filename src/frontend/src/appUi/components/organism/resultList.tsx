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

interface ResultsListProps {
  results: any[];
  selectedYear: string;
  selectedLevel: EducationLevel;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  results,
  selectedYear,
  selectedLevel,
}) => (
  <Card>
    <CardHeader className="pb-3 border-b">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Examination Results</CardTitle>
          <Texts variant="subtitle">
            {selectedLevel} • {selectedYear} • Showing {results.length} results
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
                  <span className="font-bold text-lg">{result.score}</span>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500">
          Your result will be  displayed here 
        </div>
      )}
    </CardContent>
  </Card>
);
