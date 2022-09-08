import { HTMLAttributes } from 'react';

const variants = {
  primary: 'bg-blue text-white hover:bg-Web-dev hover:border-Web-dev',
  secondary: 'text-blue border hover:text-white hover:bg-blue',
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: keyof typeof variants;
  onClick: React.MouseEventHandler;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({ label, variant, onClick, type, ...props }: ButtonProps) => {
  return (
    <button
      className={`m-8 flex flex-row items-center justify-center rounded border-2 border-blue py-2 px-5 text-base font-bold leading-[19px] hover:shadow-button ${variants[variant]}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
};
