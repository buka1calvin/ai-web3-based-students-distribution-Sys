import React, { useState, useEffect } from "react";
import TopNavTabs, {
  EducationLevel,
} from "../appUi/components/organism/topNavbarTabs";
import { ContentTemplate } from "../appUi/components/templates/content";
import { MainTemplate } from "../appUi/components/templates/home";
import { Navbar } from "../appUi/components/organism/navbar";
import { InstructionAlert } from "../appUi/components/organism/instrucationAlert";
import { SearchBar } from "../appUi/components/organism/searchBar";
import { ResultsList } from "../appUi/components/organism/resultList";
import { Sidebar } from "../appUi/components/organism/sidebar";
import AdCard from "../appUi/components/atoms/adCard";

const ExaminationPortal: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>("Primary");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [sidebarSearch, setSidebarSearch] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [resultsCache, setResultsCache] = useState<ResultsCache>({});

  // Demo data - this would come from an API in a real app
  const demoData: any[] = [
    {
      id: 1,
      name: "John Doe",
      level: "Primary",
      regNumber: "P2024001",
      year: "2024",
      score: "78%",
    },
    {
      id: 2,
      name: "Jane Smith",
      level: "O'Level",
      regNumber: "O2024152",
      year: "2024",
      score: "82%",
    },
    {
      id: 3,
      name: "Mike Johnson",
      level: "Primary",
      regNumber: "P2023087",
      year: "2023",
      score: "91%",
    },
    {
      id: 4,
      name: "Sarah Williams",
      level: "O'Level",
      regNumber: "O2023045",
      year: "2023",
      score: "76%",
    },
    {
      id: 5,
      name: "David Brown",
      level: "Primary",
      regNumber: "P2025012",
      year: "2025",
      score: "85%",
    },
  ];

  const handleSearch = (): void => {
    if (!registrationNumber) return;

    // Check cache first
    const cacheKey = `${registrationNumber}-${selectedYear}-${selectedLevel}`;
    if (resultsCache[cacheKey]) {
      setResults(resultsCache[cacheKey]);
      setSearchPerformed(true);
      return;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      const filteredResults = demoData.filter((result) => {
        return (
          result.regNumber
            .toLowerCase()
            .includes(registrationNumber.toLowerCase()) &&
          result.year === selectedYear &&
          result.level === selectedLevel
        );
      });

      // Update cache
      setResultsCache((prev) => ({
        ...prev,
        [cacheKey]: filteredResults,
      }));

      setResults(filteredResults);
      setSearchPerformed(true);
    }, 500);
  };

  // Clear results when filters change
  useEffect(() => {
    setResults([]);
    setSearchPerformed(false);
  }, [selectedYear, selectedLevel]);

  return (
    <MainTemplate>
      <Navbar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />

      <ContentTemplate
        sidebar={
          <Sidebar
            sidebarSearch={sidebarSearch}
            setSidebarSearch={setSidebarSearch}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
          />
        }
        content={
          <>
            <TopNavTabs
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
            />

            {!searchPerformed && <InstructionAlert />}

            <SearchBar
              registrationNumber={registrationNumber}
              setRegistrationNumber={setRegistrationNumber}
              handleSearch={handleSearch}
            />

            <ResultsList
              results={searchPerformed ? results : []}
              selectedYear={selectedYear}
              selectedLevel={selectedLevel}
            />
          </>
        }
      />
    </MainTemplate>
  );
};

export default ExaminationPortal;
