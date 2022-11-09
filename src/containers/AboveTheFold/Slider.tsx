import Image, { StaticImageData } from 'next/image';

type Logotype = {
  id: number;
  src: string | StaticImageData;
  alt: string;
};

type LogotypesList = {
  logotypesList: Logotype[];
};

export const Slider = ({ logotypesList }: LogotypesList) => (
  <>
    {logotypesList.map((logotype: Logotype) => (
      <li className="px-8" key={logotype.id}>
        <Image src={logotype.src} alt={logotype.alt} layout="fixed" />
      </li>
    ))}
  </>
);
