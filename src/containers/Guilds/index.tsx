import { useMemo, useState } from 'react';

import { guildCardsArray } from '@/common/testData';
import { Button } from '@/components/Button';

import { colors } from '../../components/Hexagon/lookup';
import { GuildsListContainer, GuildsListContainerProps } from './GuildsListContainer';
import { GuildsTextContainer, GuildsTextContainerProps } from './GuildsTextContainer';
import { Modal } from './Modal';

export type GuildsProps = GuildsTextContainerProps & GuildsListContainerProps & { buttonContent: string };

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
    <section
      className="relative mx-auto flex h-max max-w-[1440px] flex-col bg-primary pb-30 lg:grid lg:grid-flow-dense lg:grid-cols-2 lg:pb-0"
      data-testid="guilds"
    >
      <div className="my-10 self-center lg:my-0 lg:mb-40">
        <GuildsTextContainer title={title} content={content} />
        <div className="absolute bottom-0 mb-10 w-[255px] justify-end lg:static lg:ml-30 lg:w-max">
          <Button label={buttonContent} onClick={() => {}} type="button" variant="primary" />
        </div>
      </div>
      <GuildsListContainer guilds={guilds} openModal={openModal} />
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
