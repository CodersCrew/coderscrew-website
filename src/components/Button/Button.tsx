import { HTMLAttributes } from 'react';

export const primaryBtn = 'bg-blue text-white hover:bg-Web-dev hover:border-Web-dev';
export const secondaryBtn = 'text-blue border hover:text-white hover:bg-blue';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  label: string;
  onClick?: React.MouseEventHandler;
}

export const Button = ({ variant, label, onClick, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`m-8 flex flex-row items-center justify-center rounded border-2 border-blue py-2 px-6 text-base font-bold leading-[19px] hover:shadow-button ${
        variant === 'primary' ? primaryBtn : secondaryBtn
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
