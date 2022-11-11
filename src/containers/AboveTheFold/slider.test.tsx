import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { logotypes } from '../../common/testData';
import { Slider } from './Slider';

describe('Slider', () => {
  it('should render slider with logotypes', () => {
    render(<Slider logotypesList={logotypes} />);

    const testLogotypes = screen.getAllByRole('img');
    const logotypesLength = logotypes.length;

    expect(testLogotypes).toHaveLength(logotypesLength);
  });
});
