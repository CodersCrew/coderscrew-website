import { ReactNode, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IconHexagon } from '../Hexagons';
import { Modal } from './Modal';

type GuildCardProps = {
  Icon: ReactNode;
  title: string;
  shortDescription: string;
  longDescription: string;
  className?: string;
  modalHexagonsColor: string;
};

export const GuildCard = ({
  Icon,
  title,
  shortDescription,
  longDescription,
  className,
  modalHexagonsColor
}: GuildCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<null | HTMLButtonElement>(null);

  const handleOnClick = () => {
    setIsModalOpen((prev) => !prev);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  return (
    <>
      <button
        className={twMerge(
          'flex h-[180px] w-[358px] items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-darkGrey to-[rgba(56,56,56,0.15)] px-5 text-left drop-shadow-[0px_4px_4px_rgba(0,0,0,0.15)]',
          className
        )}
        onClick={handleOnClick}
        ref={cardRef}
      >
        <IconHexagon variant="guild" Icon={Icon} />
        <div className="flex flex-col gap-2">
          <p className="text-2xl">{title}</p>
          <p>{shortDescription}</p>
        </div>
      </button>
      <Modal
        Icon={Icon}
        title={title}
        description={longDescription}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        hexagonsColor={modalHexagonsColor}
      />
    </>
  );
};
