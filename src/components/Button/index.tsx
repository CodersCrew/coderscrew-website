import { HTMLAttributes } from 'react';

const variants = {
  primary: 'bg-quaternary text-addditional-white hover:bg-guild-webDev hover:border-guild-webDev',
  secondary: 'text-quaternary border hover:text-white hover:bg-quaternary'
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: keyof typeof variants;
  onClick: React.MouseEventHandler;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({ label, variant, onClick, type, ...props }: ButtonProps) => (
  <button
    className={`m-8 flex flex-row items-center justify-center rounded border-2 border-quaternary py-2 px-5 text-base font-bold leading-[19px] hover:shadow-button ${variants[variant]}`}
    onClick={onClick}
    type={type}
    {...props}
  >
    {label}
  </button>
);
