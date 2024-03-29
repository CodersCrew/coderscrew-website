import QuotationMark from '@/assets/quotationMark.svg';
import { Hexagon } from '@/components/Hexagon';

type OpinionsCarouselSlideProps = {
  content: string;
  author: string;
};

export const OpinionsCarouselSlide = ({
  content,
  author
}: OpinionsCarouselSlideProps) => (
  <div className="flex h-[382px] w-[290px] flex-col items-center justify-between rounded-lg bg-white p-6 shadow-card md:h-[288px] md:w-[510px]">
    <Hexagon variant="opinion">
      <QuotationMark />
    </Hexagon>
    <div className="text-center text-base font-semibold leading-normal">
      “ {content} ”
    </div>
    <div className="text-center text-base leading-normal text-secondary">
      – {author}
    </div>
  </div>
);
