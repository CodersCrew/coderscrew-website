import { Button } from '../../components/Button/index';

export type GuildsTextContainerProps = {
  title: string;
  content: string;
  buttonContent: string;
};

export const GuildsTextContainer = ({ title, content, buttonContent }: GuildsTextContainerProps) => (
  <div className="flex flex-col justify-center space-y-8 px-5 text-additional-white sm:px-15 md:px-2 lg:px-15">
    <h1 className="text-[3.5rem] font-bold leading-tight">{title}</h1>
    <p className="pr-[12rem] text-[1.75rem] leading-8">{content}</p>
    <div>
      <Button label={buttonContent} onClick={() => {}} type="button" variant="primary" />
    </div>
  </div>
);
