import { guildCardsArray } from '@commontestData';
import { useMemo, useState } from 'react';

import { colors } from '../../components/Hexagon/lookup';
import { GuildsListContainer, GuildsListContainerProps } from './GuildsListContainer';
import { GuildsTextContainer, GuildsTextContainerProps } from './GuildsTextContainer';
import { Modal } from './Modal';

export type GuildsProps = GuildsTextContainerProps & GuildsListContainerProps;

export const Guilds = ({ guilds, title, content, buttonContent }: GuildsProps) => {
  const [modalDataSourceId, setmodalDataSourceId] = useState<string>();

  const currentIndex = guildCardsArray.findIndex(({ id }) => id === modalDataSourceId);

  const modalData = useMemo(() => {
    const data = guildCardsArray.find(({ id }) => modalDataSourceId === id);

    return {
      label: data?.label,
      primaryColor: data?.primaryColor as keyof typeof colors,
      description: data?.description,
      descriptionLabel: data?.descriptionLabel
    };
  }, [modalDataSourceId]); // TODO: if real fetched data add to dependency array quildCardsArray

  const openModal = (id: string) => {
    setmodalDataSourceId(id);
  };

  const closeModal = () => {
    setmodalDataSourceId(undefined);
  };

  const nextModalCard = () => {
    if (currentIndex === undefined) return;
    if (currentIndex + 1 < guildCardsArray.length) {
      setmodalDataSourceId(guildCardsArray[currentIndex + 1]?.id);
    } else {
      setmodalDataSourceId(guildCardsArray[0]?.id);
    }
  };

  const prevModalCard = () => {
    if (currentIndex === undefined) return;
    if (currentIndex > 0) {
      setmodalDataSourceId(guildCardsArray[currentIndex - 1]?.id);
    } else {
      setmodalDataSourceId(guildCardsArray[guildCardsArray.length - 1]?.id);
    }
  };

  return (
    <section className="mx-0 flex h-screen items-center bg-primary" data-testid="guilds">
      <div className="mx-auto flex max-w-[1440px] items-center md:grid md:grid-flow-dense md:grid-cols-2">
        <GuildsTextContainer title={title} content={content} buttonContent={buttonContent} />
        <GuildsListContainer guilds={guilds} openModal={openModal} />
      </div>
      {modalDataSourceId && (
        <Modal
          onXclick={closeModal}
          onIconDownClick={nextModalCard}
          onIconUpClick={prevModalCard}
          id={modalDataSourceId}
          {...modalData}
        />
      )}
    </section>
  );
};
