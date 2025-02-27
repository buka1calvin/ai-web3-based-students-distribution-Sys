import React from "react";

import { Logo } from "../molecules/logo";
import { YearSelector } from "../molecules/yearSelector";
import { LoginButton } from "../molecules/loginButton";

interface NavbarProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedYear,
  setSelectedYear,
}) => (
  <header className="bg-gray-150 border-b border-b-secondary shadow-none">
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
