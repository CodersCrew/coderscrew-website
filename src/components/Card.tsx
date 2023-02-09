interface CardProps {
  header?: string;
  title: string;
  text: string;
}

export const Card = ({ header, title, text }: CardProps) => (
  <div
    className={`flex w-full max-w-sm flex-col xs:w-[390px]
      ${header ? 'gap-5' : 'gap-2'} rounded-md bg-additional-white p-8 shadow-card`}
  >
    {header && <h4 className="text-sm font-semibold uppercase tracking-wider text-quaternary">{header}</h4>}
    <h2 className="text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">{title}</h2>
    <p className="text-base leading-normal text-primary">{text}</p>
  </div>
);
