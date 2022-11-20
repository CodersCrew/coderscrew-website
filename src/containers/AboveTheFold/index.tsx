import { ImageContainer, ImageContainerProps } from './ImageContainer';
import { TextContainer, TextContainerProps } from './TextContainer';

export type AboveTheFoldProps = ImageContainerProps & TextContainerProps;

export const AboveTheFold = ({ imageSrc, imageAlt, title, content, buttonContent }: AboveTheFoldProps) => (
  <section className="mx-0 bg-additional-darkWhite">
    <div className="mx-auto max-w-screen-xl md:grid md:grid-flow-dense md:grid-cols-2">
      <ImageContainer imageSrc={imageSrc} imageAlt={imageAlt} />
      <TextContainer title={title} content={content} buttonContent={buttonContent} />
    </div>
  </section>
);
