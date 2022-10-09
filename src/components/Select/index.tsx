import { useState } from "react";
import Image from "next/image";
import Arrow from "../../common/assets/form-arrow-down.svg";

type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  selectOptions: (value: any) => void;
};

export const Select = ({ selectOptions, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState(options[0]?.label);
  selectOptions = (option: SelectOption) => {
    setOption(option.label);
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className="wma-[455px] container items-center  text-sm"
    >
      <span className="mb-2 flex h-[68px] justify-between cursor-pointer items-center rounded-2xl bg-formInputs pl-2 pr-3 text-formColor hover:bg-primary">
        {option}
        <Image width={20} height={20} src={Arrow} alt="Form arrow" />
      </span>
      <ul
        className={`cursor-pointer overflow-hidden  rounded-2xl bg-formInputs text-formColor ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOptions(option);
              setIsOpen(false);
            }}
            className="flex h-[68px] items-center pl-3 hover:bg-primary "
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
