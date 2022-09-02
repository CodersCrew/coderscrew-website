export const primary = 'bg-blue text-white hover:bg-Web-dev';
export const secondary = 'text-blue border border-2 border-blue hover:text-white hover:bg-blue';

export const Button = ({ variant, text }: { variant: string; text: string }) => {
  return (
    <button
      className={`m-8 flex h-10 w-[104px] flex-row items-center justify-center rounded text-[16px] font-bold leading-[19px] hover:shadow-button ${variant}`}
      type="button"
      onClick={() => console.log('clicked')}
    >
      {text}
    </button>
  );
};
