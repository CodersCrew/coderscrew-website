/* eslint-disable import/no-default-export */

import { Button, primary, secondary } from './Button';

const Index = () => {
  return (
    <div>
      <Button variant={primary} text="Primary" />
      <Button variant={secondary} text="Secondary" />
    </div>
  );
};

export default Index;
