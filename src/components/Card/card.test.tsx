import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Card } from '.';

describe('Card tests', () => {
  test('if card is rendered', () => {
    render(
      <Card
        header="Kim Jesteśmy ?"
        title="Organizacja non-profit 
    z Wrocławia"
        text="Najważniejszą rzeczą dla nas jest rozwój – tworzenie społeczności, w której osoby gotowe do działania mogą doskonalić swoje umiejętności."
      />,
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });
});
