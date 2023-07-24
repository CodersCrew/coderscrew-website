import Image from 'next/image';

type ImageProps = ComponentProps<typeof Image>;
type CardRecrutProps = {
  title: string;
  text: string;
  src: string;
  alt: string;
};

type ImageCardProps = ImageProps & CardRecrutProps;

export const CardRecruitProcess = ({
  title,
  text,
  src,
  alt
}: ImageCardProps) => (
  <div className="fill flex h-[347px] w-[456px] flex-col py-[27px]">
    <Image src={src} alt={alt} width="109" height="109" />
    <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
      {title}
    </p>
    <p className="pl-8 text-xl leading-7 text-primary">{text}</p>
  </div>
);
