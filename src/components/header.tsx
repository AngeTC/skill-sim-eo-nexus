import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionUpdateLevel,
  actionUpdateLevelCap,
  levelCapSelector,
  levelSelector,
} from "../reducers/character";
import { DropDown } from "./dropdown";

export const Header = () => {
  const dispatch = useDispatch();
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

  const level = useSelector(levelSelector);
  const levelCap = useSelector(levelCapSelector);

  const createLevelOptions = (): React.ReactNode[] => {
    const elements = [];
    for (let i = 1; i <= levelCap; i += 1) {
      elements.push(<option value={i}>{i}</option>);
    }
    return elements;
  };

  const onLevelChange = (event: any) => {
    dispatch(actionUpdateLevel(parseInt(event.target.value)));
  };

  const onLevelCapChange = (event: any) => {
    const newLevelCap = parseInt(event.target.value);
    debugger;
    if (newLevelCap < level) {
      dispatch(actionUpdateLevel(newLevelCap));
    }
    dispatch(actionUpdateLevelCap(newLevelCap));
  };

  return (
    <header className="flex justify-between items-center bg-grey text-secondary px-10 py-5">
      <div className="flex">Logo</div>
      <div className="flex">
        <DropDown label="Level" value={level} onChange={onLevelChange}>
          {createLevelOptions()}
        </DropDown>
        <DropDown
          label="Level Cap"
          value={levelCap}
          onChange={onLevelCapChange}
        >
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
