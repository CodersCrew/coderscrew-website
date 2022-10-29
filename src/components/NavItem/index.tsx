import arrow from '@assets/arrow.svg';
import arrowUp from '@assets/arrowUp.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export type NavItemProps = {
  item: NavElement;
};

export type NavElement = {
  label: string;
  dropdownItems?: DropdownItemsProps[];
};

export type DropdownItemsProps = {
  dropdownItemLabel: string;
  path: string;
};

export const NavItem = ({ item: { dropdownItems, label } }: NavItemProps) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const buttonClasses = showDropdown ? 'inline text-quaternary' : 'text-primary';
  const dropdownItemClasses =
    'px-5 py-3 text-left leading-5 last:rounded-b-[4px] hover:bg-additional-darkWhite  hover:text-quaternary';

  const handleShowDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        className={`w-full cursor-pointer text-sm font-bold ${buttonClasses}`}
        data-testid="navItem"
        onClick={handleShowDropdown}
      >
        {label}{' '}
        <span className={`pl-1 ${buttonClasses}`}>
          {showDropdown ? (
            <Image width={12} height={12} src={arrowUp} alt="arrowUp" />
          ) : (
            <Image width={12} height={12} src={arrow} alt="arrow" />
          )}
        </span>
      </button>
      <div
        className={`flex w-auto cursor-pointer flex-col rounded-[4px] text-base font-normal text-primary shadow-card ${
          showDropdown ? 'visible' : 'hidden'
        }`}
      >
        {dropdownItems?.map(({ dropdownItemLabel, path }) => (
          <button
            role="link"
            onClick={() => {
              router.push(path);
              handleShowDropdown();
            }}
            key={dropdownItemLabel}
            className={dropdownItemClasses}
          >
            <p>{dropdownItemLabel}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
