import { Button, primary, secondary } from '@/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button variant={primary} text="Primary" />;
export const Secondary = () => <Button variant={secondary} text="Secondary" />;
