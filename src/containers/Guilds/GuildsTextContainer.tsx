export type GuildsTextContainerProps = {
  title: string;
  content: string;
};

export const GuildsTextContainer = ({ title, content }: GuildsTextContainerProps) => (
  <div className="flex w-[255px] flex-col space-y-5 text-additional-white lg:mb-10 lg:ml-30 lg:w-4/5">
    <h1 className="text-3xl font-bold leading-tight lg:pr-[5rem] lg:text-[3rem]">{title}</h1>
    <p className="text-base font-semibold leading-6 lg:pr-[7rem] lg:text-[2rem] lg:leading-9">{content}</p>
  </div>
);
