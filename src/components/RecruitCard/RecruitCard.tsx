import Image from 'next/image';
type RecruitCardProps = {
  title: string;
  text: string;
  src: any;
  alt: string;
};

export const RecruitCard = ({ title, text, src, alt }: RecruitCardProps) => (
  <div className="flex h-[347px] w-[456px] flex-col items-center justify-center py-[27px]">
    <Image
      src={src}
      alt={alt}
      width="109"
      height="109"
      className="bg-darkGrey"
    />
    <p className="pb-4 text-2xl font-semibold leading-tight text-primary lg:text-3.5xl">
      {title}
    </p>
    <p className="pl-8 text-xl leading-7 text-primary">{text}</p>
  </div>
);
