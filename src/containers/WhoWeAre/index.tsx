import { StaticImageData } from 'next/image';

import { Field } from './Field';

export type WhoWeAreProps = {
  topQuestion: string;
  topTitle: string;
  topContent: string;
  topButton: string;
  topImage: string | StaticImageData;
  bottomQuestion: string;
  bottomTitle: string;
  bottomContent: string;
  bottomButton: string;
  bottomImage: string | StaticImageData;
};

export const WhoWeAre = ({
  topQuestion,
  topTitle,
  topContent,
  topButton,
  topImage,
  bottomQuestion,
  bottomTitle,
  bottomContent,
  bottomButton,
  bottomImage
}: WhoWeAreProps) => (
  <section className="mx-auto flex max-w-[1180px] flex-col">
    <Field
      imageSrc={topImage}
      imageClassName="justify-start"
      contentClassName="lg:ml-12 xl:pl-10"
      questionField={topQuestion}
      title={topTitle}
      content={topContent}
      buttonLabel={topButton}
      className=""
    />
    <Field
      imageSrc={bottomImage}
      className="mt-25 justify-end lg:flex-row-reverse"
      contentClassName="justify-start"
      imageClassName="lg:justify-end"
      questionField={bottomQuestion}
      title={bottomTitle}
      content={bottomContent}
      buttonLabel={bottomButton}
    />
  </section>
);
