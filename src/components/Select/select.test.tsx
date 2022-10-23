import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './index';

describe('Select test', () => {
  it('Should show select component', () => {
    const option = [{ label: 'UX/UI', value: 'ux/ui' }];

    render(<Select options={option} />);

    expect(screen.getAllByRole('presentation', { name: 'UX/UI' })).toBeInTheDocument();
  });
});
