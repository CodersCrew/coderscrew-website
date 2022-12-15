import g8 from '../../common/assets/g8.png';
import { ImageContainer } from '../../components/ImageContainer';
import { CardContainer } from './CardContainer';

export const WhoWeAre = () => (
  <div className="grid space-y-15 md:grid-cols-2 ">
    <div className="hidden md:grid md:place-content-center">
      <ImageContainer imageSrc={g8} imageAlt="" />
    </div>
    <CardContainer />
  </div>
);
