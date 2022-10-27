import { navItemArr } from '@common/testData';
import { NavItem } from '@componentsNavItem';
import { render } from '@testing-library/react';
import { expect } from 'vitest';

describe('NavItem', () => {
  it('should be rendered without errors', () => {
    const { getByTestId } = render(
      <NavItem item={{ label: 'Nasze Projekty', dropdownItems: navItemArr[0]?.dropdownItems }} />
    );

    expect(getByTestId('navItem')).toBeInTheDocument();
  });
});
