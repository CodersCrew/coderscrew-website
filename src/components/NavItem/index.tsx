import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowDown from '../../common/assets/arrow.svg';

export type NavItemProps = {
  label: string;
};

export const NavItem = ({ label }: NavItemProps) => {
  const checkLocation = (value: string) => {
    let location = '';
    switch (value) {
      case 'Nasze Projekty':
        location = 'projects';
        break;
      case 'Nasz zespół':
        location = 'team';
        break;
      case 'O nas':
        location = 'about';
        break;
      default:
    }
    return location;
  };
  checkLocation(label);

  return (
    <Link href={`/${checkLocation(label)}`}>
      <p className="w-full cursor-pointer text-sm font-semibold text-primary" data-testid="navItem">
        {label}{' '}
        <span className="pl-[4px]">
          <Image width={12} height={12} src={ArrowDown} alt="arrow" />
        </span>
      </p>
    </Link>
  );
};
