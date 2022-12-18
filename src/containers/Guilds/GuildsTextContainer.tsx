import { Button } from '../../components/Button/index';

export type GuildsTextContainerProps = {
  title: string;
  content: string;
  buttonContent: string;
};

export const GuildsTextContainer = ({ title, content, buttonContent }: GuildsTextContainerProps) => (
  <div className="flex items-center justify-center">
    <div className="ml-30 mb-40 flex w-4/5 flex-col space-y-5 text-additional-white">
      <h1 className="text-[3rem] font-bold leading-tight">{title}</h1>
      <p className="pr-[5rem] text-[2rem] font-semibold leading-9">{content}</p>
      <div>
        <Button label={buttonContent} onClick={() => {}} type="button" variant="primary" />
      </div>
    </div>
  </div>
);
