import Image from 'next/image';
import { useState } from 'react';

import Arrow from '../../common/assets/form-arrow-down.svg';

type SelectOption = {
  label: string;
  value: number;
};

export type SelectProps = {
  options: SelectOption[];
};

export const Select = ({ options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState(options[0]?.label);
  const selectOptions = (op: SelectOption) => {
    setOption(op.label);
  };

  const selectHandle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={selectHandle}
      onKeyUp={selectHandle}
      className="container max-w-[455px] items-center  text-sm"
      role="button"
      tabIndex={0}
    >
      <span className="mb-2 flex h-[68px] cursor-pointer items-center justify-between rounded-2xl bg-formInputs pl-2 pr-3 text-formColor hover:bg-primary">
        {option}
        <Image width={20} height={20} src={Arrow} alt="Form arrow" />
      </span>
      <ul
        className={`cursor-pointer overflow-hidden  rounded-2xl bg-formInputs text-formColor ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {options.map((opt) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOptions(opt);
              setIsOpen(false);
            }}
            onKeyUp={(e) => {
              e.stopPropagation();
              selectOptions(opt);
              setIsOpen(false);
            }}
            role="presentation"
            className="flex h-[68px] items-center pl-3 hover:bg-primary "
            key={opt.value}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
