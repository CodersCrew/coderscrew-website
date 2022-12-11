import { Button } from '../../components/Button/index';

export type GuildsTextContainerProps = {
  title: string;
  content: string;
  buttonContent: string;
};

export const GuildsTextContainer = ({ title, content, buttonContent }: GuildsTextContainerProps) => (
  <div className="flex items-center justify-center">
    <div className="mt-10 mb-35 flex w-[255px] flex-col space-y-5 text-additional-white md:mt-10 md:mb-20 md:w-[436px] md:pr-20 lg:mb-40 lg:ml-30 lg:w-4/5 lg:min-w-[600px]">
      <h1 className="text-[2rem] font-bold leading-tight md:text-[2.5rem] lg:text-[3rem]">{title}</h1>
      <p className="font-semibold md:pr-[2.5rem] md:text-[1.3rem] md:leading-9 lg:pr-[5rem] lg:text-[2rem]">
        {content}
      </p>
      <div className="w-full md:w-fit">
        <Button label={buttonContent} onClick={() => {}} type="button" variant="primary" />
      </div>
    </div>
  </div>
);
