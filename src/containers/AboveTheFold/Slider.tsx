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
      <li className="relative px-10" key={logotype.id}>
        <Image src={logotype.src} alt={logotype.alt} width={100} height={35} layout="fixed" />
      </li>
    ))}
  </>
);
