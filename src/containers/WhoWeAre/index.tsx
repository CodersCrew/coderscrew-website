import { StaticImageData } from 'next/image';

import { Field } from './Field';

export type WhoWeAreProps = {
  topQuestion: string;
  topTitle: string;
  topContent: string;
  topButton: string;
  topImage: string | StaticImageData;
  topImageAlt: string;
  bottomQuestion: string;
  bottomTitle: string;
  bottomContent: string;
  bottomButton: string;
  bottomImage: string | StaticImageData;
  bottomImageAlt: string;
};

export const WhoWeAre = ({
  topQuestion,
  topTitle,
  topContent,
  topButton,
  topImage,
  topImageAlt,
  bottomQuestion,
  bottomTitle,
  bottomContent,
  bottomButton,
  bottomImage,
  bottomImageAlt
}: WhoWeAreProps) => (
  <section className="mx-auto flex max-w-[1180px] flex-col">
    <Field
      imageSrc={topImage}
      imageAlt={topImageAlt}
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
      imageAlt={bottomImageAlt}
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
