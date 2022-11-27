import { useState } from 'react';

import { GuildsListContainer, GuildsListContainerProps } from './GuildsListContainer';
import { GuildsTextContainer, GuildsTextContainerProps } from './GuildsTextContainer';
import { Modal } from './Modal';

export type GuildsProps = GuildsTextContainerProps & GuildsListContainerProps;

export const Guilds = ({ guilds, title, content, buttonContent }: GuildsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalIcon, setModalIcon] = useState();

  const handleModal = (e: Event) => {
    e.preventDefault();
    setModalIcon(e.currentTarget?.children[0]);
    setModalContent(e.currentTarget?.children[1].firstChild.innerText);
    setShowModal(true);
  };

  const handleClose = (e: Event) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <section className="mx-0 flex h-screen items-center bg-primary" data-testid="guilds">
      <div className="mx-auto flex max-w-[1440px] items-center md:grid md:grid-flow-dense md:grid-cols-2">
        <GuildsTextContainer title={title} content={content} buttonContent={buttonContent} />
        <GuildsListContainer guilds={guilds} onClick={handleModal} />
      </div>
      {showModal && (
        <Modal
          onClick={handleClose}
          label={modalContent}
          guilds={guilds}
          variant="default"
          primaryColor="primary"
          opacity={0}
        />
      )}
    </section>
  );
};
