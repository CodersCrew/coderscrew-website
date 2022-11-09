export type Article = {
  header?: string;
  title: string;
  text: string;
};

export type CardProps = {
  articles: Article[];
};

export const Card = ({ articles }: CardProps) => (
  <div className="rounded-lg shadow-card" data-testid="card">
    {articles.map(({ title, header, text }) => (
      <article className="flex h-max w-full flex-col gap-3 p-5" key={title}>
        {header ? <p className="text-sm uppercase tracking-wider text-quaternary">{header}</p> : null}
        <h2 className="text-title font-medium tracking-wide text-primary">{title}</h2>
        <p className="text-base leading-6 text-secondary">{text}</p>
      </article>
    ))}
  </div>
);
