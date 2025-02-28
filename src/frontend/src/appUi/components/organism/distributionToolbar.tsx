import { Play, Database } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../atoms/button";
import { SelectField } from "../atoms/selectField";
import { Form } from "../../../components/ui/form";
import React from "react";
import { ImportDialog } from "../molecules/importDialog";
import { ExportButton } from "../molecules/exportButton";

interface DistributionToolbarProps {
  onDistribute: (year: string, level: string) => void;
  onSave: (year: string, level: string) => void;
  onImport: (data: any[], year: string, level: string) => void;
  onUseTestData: () => void;
  isDistributing: boolean;
  isSaving: boolean;
  distributedStudents: any[];
}

const formSchema = z.object({
  year: z.string().min(4, "Year is required"),
  level: z.string().min(1, "Level is required"),
});

type FormValues = z.infer<typeof formSchema>;

export const DistributionToolbar = ({
  onDistribute,
  onSave,
  onImport,
  onUseTestData,
  isDistributing,
  isSaving,
  distributedStudents,
}: DistributionToolbarProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: new Date().getFullYear().toString(),
      level: "O-Level",
    },
  });

  const yearOptions = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const levelOptions = [
    { value: "P-Level", label: "Primary" },
    { value: "O-Level", label: "Secondary" },
  ];

  const handleDistribute = () => {
    const { year, level } = form.getValues();
    onDistribute(year, level);
  };

  const handleSave = () => {
    const { year, level } = form.getValues();
    onSave(year, level);
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SelectField
            name="year"
            label="Academic Year"
            options={yearOptions}
            control={form.control}
          />
          <SelectField
            name="level"
            label="Education Level"
            options={levelOptions}
            control={form.control}
          />
        </div>
      </Form>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <ImportDialog onImport={onImport} />
          <Button variant="outline" onClick={onUseTestData} className="gap-2">
            <Database size={16} />
            Use Test Data
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <ExportButton data={distributedStudents} />
          <Button
            variant="secondary"
            onClick={handleDistribute}
            isLoading={isDistributing}
            disabled={isDistributing}
            className="gap-2"
          >
            <Play size={16} />
            Distribute Students
          </Button>
          <Button
            variant="default"
            onClick={handleSave}
            isLoading={isSaving}
            disabled={isSaving || distributedStudents.length === 0}
          >
            Save Distribution
          </Button>
        </div>
      </div>
    </div>
  );
};
