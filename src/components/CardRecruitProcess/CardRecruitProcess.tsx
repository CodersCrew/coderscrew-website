import Image from 'next/image';

// type ImageProps = ComponentProps<typeof Image>;
type CardRecruitProps = {
  title: string;
  text: string;
  src: string;
  alt: string;
};

// type ImageCardProps = ImageProps & CardRecrutProps;

export const CardRecruitProcess = ({
  title,
  text,
  src,
  alt
}: CardRecruitProps) => (
  <div className="flex h-[347px] w-[456px] flex-col py-[27px]">
    <Image
      src={src}
      alt={alt}
      width="50"
      height="50"
      className="fill bg-white"
    />
    <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
      {title}
    </p>
    <p className="pl-8 text-xl leading-7 text-primary">{text}</p>
  </div>
);
