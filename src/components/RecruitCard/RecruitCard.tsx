import Image from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof Image>;
type HoverProps = {
  title: string;
  text: string;
  src: any;
  alt: string;
  itemNumber: string;
};

type RecruitCardProps = ImageProps & HoverProps;

export const RecruitCard = ({
  title,
  text,
  itemNumber,
  src,
  alt
}: RecruitCardProps) => (
  <div className="flex w-[340px] flex-col items-center justify-center py-[27px] md:h-[347px] md:w-[456px]">
    <Image src={src} alt={alt} width="109" height="109" />
    <div className="flex flex-row">
      <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
        {`${itemNumber}.\u00A0`}
      </p>
      <div className="flex flex-col">
        <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
          {title}
        </p>
        <p className="w-[20rem] text-xl leading-7 text-primary">{text}</p>
      </div>
    </div>
  </div>
);
