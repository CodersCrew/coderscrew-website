import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Backdrop as Component } from './Backdrop';

const meta: Meta<typeof Component> = {
  title: 'components/Backdrop',
  component: Component
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Backdrop = {
  render: () => {
    const [show, setShow] = useState(true);

    return (
      <div className="relative h-32">
        <button onClick={() => setShow(true)}>Show backdrop</button>
        {show && <Component background onClick={() => setShow(false)} />}
      </div>
    );
  }
} satisfies Story;
