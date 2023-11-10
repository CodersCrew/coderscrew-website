import Image from 'next/image';

type PressCardProps = { title: string; alt: string; src: string };

export const PressCard = ({ title, alt, src }: PressCardProps) => (
  <div className="w-360 h-263 rounded-8 flex flex-col items-center justify-center gap-4 bg-white p-0 pb-8">
    <Image
      src={src}
      alt={alt}
      width="392"
      height="192"
      className="w-full bg-white"
    />
    <p className="w-112 font-lato leading-120 flex items-center justify-center text-base font-semibold text-black">
      {title}
    </p>
    <a
      href={src}
      download
      className="h-11 rounded-lg border-quaternary bg-quaternary px-6 py-3 text-center text-base font-bold leading-tight text-additional-white hover:border-webDev hover:bg-webDev hover:shadow-button"
    >
      Pobierz
    </a>
  </div>
);
