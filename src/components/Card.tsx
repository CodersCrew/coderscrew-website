type CardProps = {
  header: string;
  title: string;
  text: string;
};

export const Card = ({ header, title, text }: CardProps) => (
  <div className="flex max-w-sm flex-col gap-4 rounded-md bg-white p-6 shadow-card lg:gap-5 xs:w-max xs:p-8">
    <p className="text-sm font-semibold uppercase tracking-wider text-quaternary">{header}</p>
    <p className="text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">{title}</p>
    <p className="text-base leading-normal text-primary">{text}</p>
  </div>
);
