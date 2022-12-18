import { useCallback } from 'react';

export type NavItemProps = {
  label: string;
  path: NavItemPath;
};

export enum NavItemPath {
  TEAMS = 'teams',
  PARTNERS = 'partners',
  PROJECTS = 'projects'
}

export const NavItem = ({ path, label }: NavItemProps) => {
  const scrollToSection = useCallback(() => {
    const destination = document.querySelector(`#${path}`);
    if (destination) {
      destination.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [path]);
  return (
    <button onClick={scrollToSection}>
      <p className="w-full cursor-pointer text-sm font-semibold text-primary" data-testid="navItem">
        {label}
      </p>
    </button>
  );
};
