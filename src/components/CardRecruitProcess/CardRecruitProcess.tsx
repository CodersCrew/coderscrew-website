import ArrowIcon from '@/assets/arrow-right.svg';

type CardRecrutProps = {
  icon: string;
  title: string;
  text: string;
};

export const CardRecruitProcess = ({ title, text }: CardRecrutProps) => (
  <div className="flex flex-col">
    <ArrowIcon />
    <h2 className="text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
      {title}
    </h2>
    <p className="text-base leading-normal text-primary">{text}</p>
  </div>
);
