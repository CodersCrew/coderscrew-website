import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './index';

describe('Select test', () => {
  it('Should show select component', () => {
    const option = [
      { label: 'UX/UI', value: 'ux-ui' },
      { label: 'WebDevelopment', value: 'web-development' },
      { label: 'HR', value: 'hr' },
      { label: 'SEO', value: 'seo' }
    ];

    render(<Select options={option} />);
    // const expected = screen.getByTestId('UX/UI')
    expect(screen.getByText('SEO')).toBeInTheDocument();
  });
});
