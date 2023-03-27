export type CarouselSlideProps = {
  content: string;
  author: string;
};

export const CarouselSlide = ({ content, author }: CarouselSlideProps) => (
  <div className="flex h-[382px] w-[290px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-card md:h-[288px] md:w-[510px]">
    <div className="h-[56px] w-[56px] bg-primary" />
    <div className="text-center text-base font-semibold leading-normal">“ {content} ”</div>
    <div className="text-center text-base leading-normal text-secondary">– {author}</div>
  </div>
);
