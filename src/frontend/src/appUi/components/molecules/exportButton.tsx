import { Button } from "../../../components/ui/button";
import { Download } from "lucide-react";
import React from "react";

import * as XLSX from "xlsx";

interface ExportButtonProps {
  data: any[];
  filename?: string;
}

export const ExportButton = ({
  data,
  filename = "distributed-students",
}: ExportButtonProps) => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <Button
      onClick={handleExport}
      variant="outline"
      className="gap-2"
      disabled={!data.length}
    >
      <Download size={16} />
      Export Excel
    </Button>
  );
};
