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
import Footer from "../appUi/components/organism/Footer";
import { demoData } from "../../constants/index";

const ExaminationPortal: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>("P-Level");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [sidebarSearch, setSidebarSearch] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  //@ts-ignore
  const [resultsCache, setResultsCache] = useState<ResultsCache>({});


  const handleSearch = (): void => {
    if (!registrationNumber) return;
    console.log("reg Number==",registrationNumber)
    const cacheKey = `${registrationNumber}-${selectedYear}-${selectedLevel}`;
    if (resultsCache[cacheKey]) {
      setResults(resultsCache[cacheKey]);
      setSearchPerformed(true);
      return;
    }

    setTimeout(() => {
      const matchingYearData = demoData.find(
        (data: any) =>
          data.year === selectedYear && data.level === selectedLevel
      );
      console.log("marchingYears==",matchingYearData)
      const filteredResults = matchingYearData
        ? matchingYearData.distributions.filter((dist) =>
            dist.registrationNumber
              .toLowerCase()
              .includes(registrationNumber.toLowerCase())
          )
        : [];
        console.log("filtered===",filteredResults)
      // Update cache
      setResultsCache((prev: any) => ({
        ...prev,
        [cacheKey]: filteredResults,
      }));

      setResults(filteredResults);
      setSearchPerformed(true);
    }, 500);
  };

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
            setSelectedLevel={setSelectedLevel as any}
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
      <Footer />
    </MainTemplate>
  );
};

export default ExaminationPortal;
