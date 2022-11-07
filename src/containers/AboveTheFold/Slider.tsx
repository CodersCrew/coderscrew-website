import Image from 'next/image';

interface Logotype {
  id: number;
  src: string;
}

export const Slider = ({ logotypesList }) =>
  logotypesList.map((logotype: Logotype) => (
    <li className="px-8" key={logotype.id}>
      <Image src={logotype.src} layout="fixed" />
    </li>
  ));
