export interface CardProps {
  header: string;
  title: string;
  text: string;
}

export const Card = ({ header, title, text }: CardProps) => {
  return (
    <div className="rounded-lg shadow-card" data-testid="card">
      <article className="flex h-max w-full flex-col gap-3 p-5 tracking-tight">
        <p className="text-sm uppercase text-blue">{header}</p>
        <h1 className="text-[24px] font-medium text-primary">{title}</h1>
        <p className="text-base text-secondary">{text}</p>
      </article>
    </div>
  );
};
