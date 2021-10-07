import React from "react";

interface Props {
  children?: React.ReactNode;
  label: string;
}

export const DropDown = (props: Props) => {
  const { children, label } = props;
  return (
    <div className="flex flex-col mr-5 w-24">
      <span className="flex">{label}</span>
      <select name="pets" id="pet-select" className="text-black">
        {children}
      </select>
    </div>
  );
};
