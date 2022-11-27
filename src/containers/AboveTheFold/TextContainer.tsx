import { Button } from '../../components/Button/index';

export type TextContainerProps = {
  title: string;
  content: string;
  buttonContent: string;
};

export const TextContainer = ({ title, content, buttonContent }: TextContainerProps) => (
  <div className="flex flex-col justify-center space-y-8 px-5 sm:px-15 md:px-2 lg:px-15">
    <h1 className="text-[2rem] font-bold">{title}</h1>
    <p className="text-[1.25rem]">{content}</p>
    <div>
      <Button label={buttonContent} onClick={() => {}} type="button" variant="secondary" />
    </div>
  </div>
);
