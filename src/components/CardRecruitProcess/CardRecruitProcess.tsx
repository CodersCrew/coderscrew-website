import Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image>;
type CardRecrutProps = {
  title: string;
  text: string;
};

type ImageCardProps = ImageProps & CardRecrutProps;

export const CardRecruitProcess = ({
  title,
  text,
  alt,
  ...props
}: ImageCardProps) => (
  <div className="flex h-[347px] w-[456px] flex-col py-[27px]">
    <Image {...props} alt={alt} />
    <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
      {title}
    </p>
    <p className="pl-8 text-xl leading-7 text-primary">{text}</p>
  </div>
);
