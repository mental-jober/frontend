"use client";

import { useState } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggle = () => {
    setIsOn((prevState) => !prevState);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <div
      className={`w-[41px] h-[22px] rounded-full p-[3px] cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-foundation-blue-300" : "bg-foundation-grey-250"
      }`}
      onClick={toggle}
    >
      <div
        className={`w-[16px] h-[16px] bg-white rounded-full transition-transform duration-300 ${
          isOn ? "transform translate-x-[19px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
