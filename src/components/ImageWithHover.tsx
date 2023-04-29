import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ArrowIcon from '../common/assets/arrow-right.svg';

type ImageProps = React.ComponentProps<typeof Image>;
type HoverProps = {
  title: string;
  text: string;
  link: string;
};

type ImageWithHoverProps = ImageProps & HoverProps;

export const ImageWithHover = ({ title, text, link, ...rest }: ImageWithHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => setIsHovered(true);
  const handleOnMouseLeave = () => setIsHovered(false);

  return (
    <div className="relative flex" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <Image {...rest} />
      <div
        className={twMerge(
          'absolute inset-0 flex cursor-default select-none flex-col items-center bg-black/[.70] px-9 text-center text-white transition duration-300 sm:px-12 lg:px-8',
          isHovered ? 'lg:opacity-1' : 'lg:opacity-0'
        )}
      >
        <h1 className="mt-auto grow-0 self-stretch text-3xl font-bold leading-[1.2] tracking-wide lg:text-2xl 2xl:text-3xl">
          {title}
        </h1>
        <p className="mt-5 font-medium sm:mt-6 lg:mt-3 xl:mt-6 2xl:mt-6">{text}</p>
        <p className="mb-4 mt-auto text-sm font-medium tracking-wide">
          <Link href={link}>
            <a className="flex items-center justify-center">
              <span className="mr-2">Czytaj więcej</span>
              <ArrowIcon />
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
