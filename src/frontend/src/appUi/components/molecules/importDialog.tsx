import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../../components/ui/dialog";

import { Input } from "../../../components/ui/input";
import { Upload } from "lucide-react";
import * as XLSX from 'xlsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from "../../../components/ui/form";
import React from "react";
import { Button } from "../atoms/button";
import { SelectField } from "../atoms/selectField";


interface ImportDialogProps {
  onImport: (data: any[], year: string, level: string) => void;
}


// Form schema
const formSchema = z.object({
    year: z.string().min(4, "Year is required"),
    level: z.string().min(1, "Level is required"),
  });
  
  type FormValues = z.infer<typeof formSchema>;
  
  export const ImportDialog = ({ onImport }: ImportDialogProps) => {
    const [open, setOpen] = useState(false);
    const [fileData, setFileData] = useState<any[] | null>(null);
    
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        year: new Date().getFullYear().toString(),
        level: "secondary",
      },
    });
    
    const yearOptions = [
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
      { value: "2025", label: "2025" },
    ];
    
    const levelOptions = [
      { value: "primary", label: "Primary" },
      { value: "secondary", label: "Secondary" },
      { value: "university", label: "University" },
    ];
    
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);
          
          setFileData(json);
        } catch (error) {
          console.error("Error parsing Excel file:", error);
        }
      };
      reader.readAsBinaryString(file);
    };
    
    const handleImport = (values: FormValues) => {
      if (fileData) {
        onImport(fileData, values.year, values.level);
        setOpen(false);
        setFileData(null);
        form.reset();
      }
    };
    
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Upload size={16} />
            Import Data
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Import Student Data</DialogTitle>
            <DialogDescription>
              Upload an Excel file containing student information and select academic year and level.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleImport)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
              <Input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileUpload}
              />
              <DialogFooter>
                <Button 
                  type="submit" 
                  disabled={!fileData} 
                  className="w-full"
                >
                  Import
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  };
  