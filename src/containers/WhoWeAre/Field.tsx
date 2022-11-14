import Image, { StaticImageData } from 'next/image';

import { Button } from '../../components/Button/index';

type FieldProps = {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  className: string;
  contentClassName: string;
  imageClassName: string;
  buttonLabel: string;
  questionField: string;
  title: string;
  content: string;
};

export const Field = ({
  imageSrc,
  imageAlt,
  className,
  contentClassName,
  imageClassName,
  questionField,
  title,
  content,
  buttonLabel
}: FieldProps) => (
  <div className={`mx-auto flex flex-col justify-center lg:mx-0 lg:flex-row ${className}`}>
    <div className={`flex h-full w-full ${imageClassName}`}>
      <Image width={558} height={316} src={imageSrc} alt={imageAlt} objectFit="contain" />
    </div>
    <div
      className={`mt-10 flex max-h-[316px] max-w-[558px] flex-col space-y-3 pr-13 lg:mt-0 lg:pr-6 xl:space-y-4 xl:pr-16 ${contentClassName}`}
    >
      <p className="text-sm font-semibold uppercase text-quaternary">{questionField}</p>
      <p className="text-[2rem] font-semibold">{title}</p>
      <p>{content}</p>
      <div className="pt-2">
        <Button label={buttonLabel} onClick={() => {}} type="button" variant="primary" />
      </div>
    </div>
  </div>
);
