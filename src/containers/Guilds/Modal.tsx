import { HexagonProps } from '@componentsHexagon';
import React from 'react';

import { GuildCard, GuildCardProps } from './GuildCard';

export type ModalProps = HexagonProps & {
  onClick: React.MouseEventHandler;
  label: string;
  guilds: GuildCardProps[];
};

export const Modal = ({ onClick, label, guilds }: ModalProps) => {
  const targetGuildData = guilds.find((guild) => guild.label === label);

  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      className="fixed flex h-full w-full items-center justify-center backdrop-blur-sm"
    >
      <GuildCard
        variant="default"
        primaryColor={targetGuildData?.primaryColor}
        opacity={100}
        onClick={onClick}
        label={label}
        descriptionLabel={targetGuildData?.descriptionLabel}
        description={targetGuildData?.description}
        modal
      />
    </div>
  );
};
