import { navItemArr } from '@common/testData';
import { NavItem } from '@componentsNavItem';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';
import { expect, vi } from 'vitest';

vi.mock('next/router', () => ({
  useRouter: vi.fn()
}));

const mockRouter = {
  push: vi.fn()
};

(useRouter as jest.Mock).mockReturnValue(mockRouter);

const mockDataItems = navItemArr[0]?.dropdownItems;

describe('NavItem', () => {
  it('should be rendered without errors and push navigation route', () => {
    const { getByTestId, getByText } = render(<NavItem navItemLabel="O nas" dropdownItems={mockDataItems} />);

    expect(getByTestId('navItem')).toBeInTheDocument();
    expect(getByText('Osiągnięcia')).toBeInTheDocument();

    fireEvent.click(getByText('Gildie'));
    expect(mockRouter.push).toHaveBeenCalledWith('/guilds');
  });
});
