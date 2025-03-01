import React from "react";
import { Button } from "../../../components/ui/button";
import { EducationLevel } from "../organism/topNavbarTabs";
import { LevelOption } from "../organism/sidebar";
import { cn } from "../../../lib/utils";

interface LevelButtonProps {
  level: LevelOption;
  selectedLevel: string;
  onClick: (levelId: string) => void;
}
export const LevelButton: React.FC<LevelButtonProps> = ({
  level,
  selectedLevel,
  onClick,
}) => (
  <Button
    variant={selectedLevel === level.id ? "default" : "ghost"}
    className={cn(selectedLevel===level.id ? "text-white bg-black" : "text-black bg-gray-100","w-full font-bold justify-start")}
    onClick={() => onClick(level.id)}
  >
    {level.name}
  </Button>
);
