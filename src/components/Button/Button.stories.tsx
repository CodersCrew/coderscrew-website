import { Button, primaryBtn, secondaryBtn } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button variant={primaryBtn} text="Primary" />;
export const Secondary = () => <Button variant={secondaryBtn} text="Secondary" />;
