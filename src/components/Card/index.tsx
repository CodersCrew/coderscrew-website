export interface CardProps {
  header: string;
  title: string;
  text: string;
  secondTitle?: string;
  secondText?: string;
}

export const Card = ({ header, title, text, secondTitle, secondText }: CardProps) => {
  return (
    <div className="rounded-lg shadow-card" data-testid="card">
      <article className="flex h-max w-full flex-col gap-3 p-5">
        <p className="text-sm uppercase tracking-wider text-blue">{header}</p>
        <h2 className="text-title font-medium tracking-wide text-primary">{title}</h2>
        <p className="text-base leading-6 text-secondary">{text}</p>
        {secondTitle ? <h2 className="pt-3 text-title font-medium text-primary">{secondTitle}</h2> : null}
        {secondText ? <p className="text-base leading-6 text-secondary">{secondText}</p> : null}
      </article>
    </div>
  );
};
