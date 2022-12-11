import arrow from '@assets/arrow.svg';
import arrowUp from '@assets/arrowUp.svg';
import { useClickOutside } from '@hooks/useClickOutside';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export type NavItemProps = {
  navItemLabel: string;
  dropdownItems?: DropdownItemsType[];
};

export type DropdownItemsType = {
  label: string;
  path: string;
};

export const NavItem = ({ dropdownItems, navItemLabel }: NavItemProps) => {
  const clickRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const buttonClasses = showDropdown ? 'inline text-quaternary' : 'text-primary';
  const dropdownItemClasses =
    'px-5 py-3 text-left leading-5 last:rounded-b-[4px] hover:bg-additional-darkWhite  hover:text-quaternary';
  const showDropdownClasses = showDropdown ? 'visible' : 'hidden';
  const dropdownIndicatorIcon = showDropdown ? arrowUp : arrow;

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const closeDropdown = () => setShowDropdown(false);

  const onItemClick = (path: string) => {
    router.push(path);
    toggleDropdown();
  };

  useClickOutside(clickRef, closeDropdown, showDropdown);

  return (
    <div ref={clickRef} className="relative flex flex-col items-center">
      <button
        className={`w-full cursor-pointer text-sm font-bold ${buttonClasses}`}
        data-testid="navItem"
        onClick={toggleDropdown}
      >
        {navItemLabel}
        <span className={`pl-2 ${buttonClasses}`}>
          <Image width={12} height={12} src={dropdownIndicatorIcon} alt="Dropdown indicator" />
        </span>
      </button>
      <div
        className={`absolute top-9 flex w-max cursor-pointer flex-col rounded-[4px] text-base font-normal text-primary shadow-card ${showDropdownClasses}`}
      >
        {dropdownItems?.map(({ label, path }) => (
          <button
            role="link"
            onClick={() => {
              onItemClick(path);
            }}
            key={label}
            className={dropdownItemClasses}
          >
            <p>{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
