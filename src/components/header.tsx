import React from "react";
import { DropDown } from "./dropdown";

export const Header = () => {
  const levelCapOptions = [99, 109, 119, 130];
  const retireLevelOptions = [
    "N/A",
    "30-39",
    "40-49",
    "50-59",
    "60-69",
    "70-98",
    "99",
  ];

  return (
    <header className="flex justify-between items-center bg-grey text-secondary px-10 py-5">
      <div className="flex">Logo</div>
      <div className="flex">
        <DropDown label="Level"></DropDown>
        <DropDown label="Level Cap">
          {levelCapOptions.map((levelCap) => (
            <option value={levelCap}>{levelCap}</option>
          ))}
        </DropDown>
        <DropDown label="Retire Level">
          {retireLevelOptions.map((retireLevel) => (
            <option value={retireLevel}>{retireLevel}</option>
          ))}
        </DropDown>
        <DropDown label="Class" />
        <DropDown label="Sub-class" />
      </div>
    </header>
  );
};
