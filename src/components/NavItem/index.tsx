import arrow from '@assets/arrow.svg';
import arrowUp from '@assets/arrowUp.svg';
import Image from 'next/image';
import Link from 'next/link';
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
  const [showDropdown, setShowDropdown] = useState(false);

  const buttonClasses = showDropdown ? 'text-quaternary inline' : 'text-primary';
  const dropdownItemClasses =
    'hover:text-quaternary hover:bg-additional-darkWhite px-5 leading-5 py-3 last:rounded-b-[4px]';

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
      <ul
        className={`flex w-auto cursor-pointer flex-col rounded-[4px] text-left text-base font-normal text-primary shadow-card ${
          showDropdown ? 'visible' : 'hidden'
        }`}
      >
        {dropdownItems?.map(({ dropdownItemLabel, path }) => (
          <li key={dropdownItemLabel} className={dropdownItemClasses}>
            <Link href={path} onClick={handleShowDropdown}>
              {dropdownItemLabel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
