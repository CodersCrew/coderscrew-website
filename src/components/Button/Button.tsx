export const primaryBtn = 'bg-blue text-white hover:bg-Web-dev';
export const secondaryBtn = 'text-blue border border-2 border-blue hover:text-white hover:bg-blue';

type ButtonProps = {
  variant: string;
  text: string;
  onClick?: React.MouseEventHandler;
};

export const Button = ({ variant, text, onClick }: ButtonProps) => {
  return (
    <button
      className={`m-8 flex flex-row items-center justify-center rounded py-3 px-5 text-base font-bold leading-[19px] hover:shadow-button ${variant}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
