import { NavItem, NavItemPath } from '@componentsNavItem';
import { render } from '@testing-library/react';
import { expect } from 'vitest';

describe('NavItem', () => {
  it('should be rendered without errors', () => {
    const { getByTestId } = render(<NavItem item={{ label: 'Nasze Projekty', path: NavItemPath.PROJECTS }} />);

    expect(getByTestId('navItem')).toBeInTheDocument();
  });
});
