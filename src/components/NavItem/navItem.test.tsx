import { NavItem } from '@componentsNavItem';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

describe('NavItem', () => {
  it('should be rendered without errors', () => {
    render(<NavItem label="Nasze Projekty" />);
    const navItem = screen.getByTestId('navItem');
    expect(navItem).toBeInTheDocument();
  });
});
