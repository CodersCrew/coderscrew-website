import { NavItem, NavItemPath } from '@components/NavItem';
import { render } from '@testing-library/react';
import { expect } from 'vitest';

describe('NavItem', () => {
  it('should be rendered without errors', () => {
    const { getByTestId, getByText } = render(<NavItem label="Zespoły" path={NavItemPath.TEAMS} />);

    expect(getByTestId('navItem')).toBeInTheDocument();
    expect(getByText('Zespoły')).toBeInTheDocument();
  });
});
