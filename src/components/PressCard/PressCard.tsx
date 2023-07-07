import Image from 'next/image';
import { ComponentProps } from 'react';

import { Props } from '@/assets';

type ImageProps = ComponentProps<typeof Image>;
type HoverProps = {
  title: string;
  alt: string;
  src: string;
};

type PressCardProps = ImageProps & HoverProps & Props;

export const PressCard = ({ title, alt, src }: PressCardProps) => (
  <div className="w-360 h-263 rounded-8 flex flex-col items-center justify-center gap-4 bg-white p-0 pb-8">
    <Image src={src} alt={alt} className="w-full bg-white" />
    <p className="w-112 font-lato leading-120 flex items-center justify-center text-base font-semibold text-black">
      {title}
    </p>
    <a
      href={src}
      className="border-2 border-quaternary bg-quaternary font-bold text-additional-white hover:border-webDev hover:bg-webDev hover:shadow-button"
    >
      Pobierz
    </a>
  </div>
);
