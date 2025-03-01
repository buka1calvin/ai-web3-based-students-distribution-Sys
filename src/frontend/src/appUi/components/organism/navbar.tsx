import React from "react";

import { Logo } from "../molecules/logo";
import { YearSelector } from "../molecules/yearSelector";
import { LoginButton } from "./loginButton";

interface NavbarProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedYear,
  setSelectedYear,
}) => (
  <header className="bg-gray-150 border-b border-b-secondary shadow-none bg-white fixed top-0 w-full left-0 z-50 md:px-20 2xl:px-0">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Logo />
      <div className="flex items-center space-x-4">
        <YearSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <LoginButton />
      </div>
    </div>
  </header>
);
