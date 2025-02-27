import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import React from "react";

export type EducationLevel = "Primary" | "O'Level";

interface TopNavTabsProps {
  selectedLevel: EducationLevel;
  setSelectedLevel: (level: EducationLevel) => void;
}

const TopNavTabs: React.FC<TopNavTabsProps> = ({
  selectedLevel,
  setSelectedLevel,
}) => (
  <div className="py-1 border-b border-secondary">
    <Tabs defaultValue={selectedLevel} className="w-full">
      <TabsList className="w-full  justify-start">
        <TabsTrigger
          className="rounded-full font-bold  bg-secondary"
          value="Primary"
          onClick={() => setSelectedLevel("Primary")}
        >
          Primary
        </TabsTrigger>
        <TabsTrigger
          value="O'Level"
          className="rounded-full  bg-secondary font-bold"
          onClick={() => setSelectedLevel("O'Level")}
        >
          O'Level
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
);

export default TopNavTabs;
