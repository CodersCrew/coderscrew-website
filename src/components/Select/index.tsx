import Arrow from '@assets/form-arrow-down.svg';
import Image from 'next/image';
import React, { SyntheticEvent, useState } from 'react';

type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
};

type OptionField = {
  currentOptionLabel?: string;
};

type SelectListProps = {
  options: SelectOption[];
  handleChooseOption: React.MouseEventHandler<HTMLLIElement>;
  openClass: string;
};

const CurrentOptionField = ({ currentOptionLabel }: OptionField) => (
  <span className="bg-formInputs text-formColor mb-2 flex h-[68px] cursor-pointer items-center justify-between rounded-2xl pl-2 pr-3 hover:bg-primary">
    {currentOptionLabel}
    <Image width={20} height={20} src={Arrow} alt="Form arrow" />
  </span>
);

const SelectableList = ({ options, handleChooseOption, openClass }: SelectListProps) => (
  <ul className={`bg-formInputs text-formColor cursor-pointer overflow-hidden rounded-2xl ${openClass}`}>
    {options.map(({ value, label }) => (
      <li
        onClick={handleChooseOption}
        onKeyUp={handleChooseOption}
        role="presentation"
        // data-testid='UX/UI'
        className="flex h-[68px] items-center pl-3 hover:bg-primary "
        key={value}
        data-value={value}
      >
        {label}
      </li>
    ))}
  </ul>
);

export const Select = ({ options }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(options[0]);

  const openClass = open ? 'block' : 'hidden';

  const toggleSelect = () => {
    setOpen((prev) => !prev);
  };

  const closeSelect = () => {
    setOpen(false);
  };

  const handleChooseOption = (e: SyntheticEvent) => {
    e.stopPropagation();

    const selectedOptionValue = e.target.dataset.value;
    const selectedOption = options[options.findIndex((option) => option.value === selectedOptionValue)];

    setCurrentOption(selectedOption);
    closeSelect();
  };

  return (
    <div
      onBlur={closeSelect}
      onClick={toggleSelect}
      onKeyUp={toggleSelect}
      className="container max-w-[455px] items-center text-sm"
      role="button"
      tabIndex={0}
    >
      <CurrentOptionField currentOptionLabel={currentOption?.label} />
      <SelectableList options={options} handleChooseOption={handleChooseOption} openClass={openClass} />
    </div>
  );
};
