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
  const [open, setOpen] = useState(false);

  const openButtonClasses = open ? 'text-quaternary inline' : 'text-primary';
  const dropdownItemClasses =
    'hover:text-quaternary hover:bg-additional-darkWhite px-5 leading-5 py-3 last:rounded-b-[4px]';

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className={`w-full cursor-pointer text-sm font-bold ${openButtonClasses}`}
        data-testid="navItem"
        onClick={handleClick}
        onBlur={handleClick}
      >
        {label}{' '}
        <span className={`pl-1 ${openButtonClasses}`}>
          {open ? (
            <Image width={12} height={12} src={arrowUp} alt="arrowUp" />
          ) : (
            <Image width={12} height={12} src={arrow} alt="arrow" />
          )}
        </span>
      </button>
      <div
        className={`flex w-auto cursor-pointer flex-col rounded-[4px]  text-left text-base  font-normal text-primary shadow-card  ${
          open ? 'visible' : 'hidden'
        }`}
      >
        {dropdownItems?.map(({ dropdownItemLabel, path }) => (
          <Link href={path} key={dropdownItemLabel}>
            <p className={dropdownItemClasses}>{dropdownItemLabel}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
