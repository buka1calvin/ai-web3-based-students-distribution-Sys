import React from "react";
import { IconWrapper } from "../atoms/icon";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { AlertCircle } from "lucide-react";

export const InstructionAlert: React.FC = () => (
    <Alert className="mb-6 text-red-700">
      <IconWrapper icon={AlertCircle} className="h-4 w-4 text-red-700" />
      <p>
        Please enter your registration number to view your examination results
      </p>
    </Alert>
  );