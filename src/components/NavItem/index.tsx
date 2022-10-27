import ArrowDown from '@assets/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import React, { MouseEvent, useCallback } from 'react';

export type NavItemProps = {
  item: NavElement;
};

export type NavElement = {
  label: string;
  path: NavItemPath;
};

export enum NavItemPath {
  PROJECTS = 'projects',
  TEAM = 'team',
  ABOUT = 'about'
}

export const NavItemArr: NavElement[] = [
  {
    path: NavItemPath.PROJECTS,
    label: 'Nasze Projekty'
  },
  {
    path: NavItemPath.TEAM,
    label: 'Nasz Zespół'
  },
  {
    path: NavItemPath.ABOUT,
    label: 'O nas'
  }
];

export const NavItem = ({ item: { path, label } }: NavItemProps) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const destination = document.querySelector(`#${path}`);
      if (destination) {
        destination.scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    [path]
  );
  return (
    <Link href={path}>
      <p className="w-full cursor-pointer text-sm font-semibold text-primary" data-testid="navItem">
        {label}{' '}
        <span className="pl-[4px]">
          <Image width={12} height={12} src={ArrowDown} alt="arrow" />
        </span>
      </p>
    </Link>
  );
};
