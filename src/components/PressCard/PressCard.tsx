import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image>;
type HoverProps = {
  title: string;
};

type PressCardProps = ImageProps & HoverProps;

export const PressCard = ({ title, link, ...props }: PressCardProps) => (
  <div>
    <Image {...props} alt={alt} />
    <p className="mt-auto grow-0 self-stretch text-3xl font-bold leading-tight tracking-wide lg:text-2xl 2xl:text-3xl">
      {title}
    </p>
    <Link href={link}></Link>
  </div>
);
