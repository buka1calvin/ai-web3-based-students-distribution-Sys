import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { StudentDistributionTable } from "../molecules/studentDistributionTable";
import { DistributionToolbar } from "../organism/distributionToolbar";

interface DistributionTemplateProps {
  title: string;
  onDistribute: (year: string, level: string) => void;
  onSave: (year: string, level: string) => void;
  onImport: (data: any[], year: string, level: string) => void;
  onUseTestData: () => void;
  isDistributing: boolean;
  isSaving: boolean;
  distributedStudents: any[];
}

export const DistributionTemplate = ({
  title,
  onDistribute,
  onSave,
  onImport,
  onUseTestData,
  isDistributing,
  isSaving,
  distributedStudents,
}: DistributionTemplateProps) => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <DistributionToolbar
            onDistribute={onDistribute}
            onSave={onSave}
            onImport={onImport}
            onUseTestData={onUseTestData}
            isDistributing={isDistributing}
            isSaving={isSaving}
            distributedStudents={distributedStudents}
          />
          <div className="mt-6">
            <StudentDistributionTable students={distributedStudents} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
