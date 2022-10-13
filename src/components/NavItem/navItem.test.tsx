import { NavItem, NavItemPath } from '@componentsNavItem';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

describe('NavItem', () => {
  it('should be rendered without errors', () => {
    render(<NavItem item={{ label: 'Nasze Projekty', path: NavItemPath.PROJECTS }} />);
    const navItem = screen.getByTestId('navItem');
    expect(navItem).toBeInTheDocument();
  });
});
