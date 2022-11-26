import { cardArticleData } from '@commontestData';
import { Card } from '@componentsCard';

export const CardContainer = () => (
  <div className="order-1 grid place-content-center space-y-5 px-5">
    <div className="max-h-[296px] max-w-[392px]">
      <Card articles={[cardArticleData]} />
    </div>
    <div className="max-h-[296px] max-w-[392px]">
      <Card articles={[cardArticleData]} />
    </div>
  </div>
);
