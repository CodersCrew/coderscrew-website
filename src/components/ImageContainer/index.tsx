import Image, { StaticImageData } from 'next/image';

export type ImageContainerProps = {
  imageSrc: string | StaticImageData;
  imageAlt: string;
};

export const ImageContainer = ({ imageSrc, imageAlt }: ImageContainerProps) => (
  <div className="order-1 grid h-full w-full place-content-center ">
    <Image src={imageSrc} alt={imageAlt} width={591} height={619} objectFit="contain" priority />
  </div>
);
