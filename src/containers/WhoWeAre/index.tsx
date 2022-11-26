import g8 from '../../common/assets/g8.png';
import { ImageContainer } from '../AboveTheFold/ImageContainer';
import { CardContainer } from './CardContainer';

export const WhoWeAre = () => (
  <div className="grid space-y-15">
    <div className="max-h-[296px]">
      <ImageContainer imageSrc={g8} imageAlt="" />
    </div>
    <CardContainer />
  </div>
);
