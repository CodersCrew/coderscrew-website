import Arrow from '@assets/form-arrow-down.svg';
import Image from 'next/image';
import { useState } from 'react';

type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
};

const CurrentOptionField = ({ currentOptionLabel }) => {
  return (
    <span className="mb-2 flex h-[68px] cursor-pointer items-center justify-between rounded-2xl bg-formInputs pl-2 pr-3 text-formColor hover:bg-primary">
      {currentOptionLabel}
      <Image width={20} height={20} src={Arrow} alt="Form arrow" />
    </span>
  );
};

const SelectableList = ({ options, handleChooseOption, openClass }) => {
  return (
    <ul className={`cursor-pointer overflow-hidden rounded-2xl bg-formInputs text-formColor ${openClass}`}>
      {options.map(({ value, label }) => (
        <li
          onClick={handleChooseOption}
          onKeyUp={handleChooseOption}
          role="presentation"
          className="flex h-[68px] items-center pl-3 hover:bg-primary "
          key={value}
          data-value={value}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

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

  const handleChooseOption = (e) => {
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
