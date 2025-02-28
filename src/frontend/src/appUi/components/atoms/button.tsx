import React from "react";
import { Button as ShadcnButton } from "../../../components/ui/button";
import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: string;
  className?: string;
  onClick?: () => any
}

export const Button: React.FC<CustomButtonProps> = ({
  children,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <ShadcnButton disabled={isLoading || disabled} {...props}>
      {isLoading ? "Loading..." : children}
    </ShadcnButton>
  );
};
