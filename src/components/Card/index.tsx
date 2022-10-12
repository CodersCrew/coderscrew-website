export type Article = {
  header?: string;
  title: string;
  text: string;
};

export type CardProps = {
  articles: Article[];
};

export const Card = ({ articles }: CardProps) => {
  return (
    <div className="rounded-lg shadow-card" data-testid="card">
      {articles.map((article) => (
        <article className="flex h-max w-full flex-col gap-3 p-5" key={article.title}>
          {article.header ? <p className="text-sm uppercase tracking-wider text-blue">{article.header}</p> : null}
          <h2 className="text-title font-medium tracking-wide text-primary">{article.title}</h2>
          <p className="text-base leading-6 text-secondary">{article.text}</p>
        </article>
      ))}
    </div>
  );
};
