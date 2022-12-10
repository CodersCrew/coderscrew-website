import { MouseEventHandler } from 'react';

import { colors } from '../../components/Hexagon/lookup';
import { GuildCard } from './GuildCard';

export type ModalProps = {
  onXclick: MouseEventHandler;
  onIconDownClick: MouseEventHandler;
  onIconUpClick: MouseEventHandler;
  primaryColor: keyof typeof colors;
  label?: string;
  description?: string;
  descriptionLabel?: string;
  id: string;
};

export const Modal = ({
  onIconUpClick,
  onIconDownClick,
  onXclick,
  label,
  primaryColor,
  id,
  description,
  descriptionLabel
}: ModalProps) => (
  <div className="fixed flex h-full w-full items-center justify-center backdrop-blur-sm">
    <GuildCard
      id={id}
      primaryColor={(primaryColor as keyof typeof colors) ?? 'primary'}
      onClick={onXclick}
      onIconDownClick={onIconDownClick}
      onIconUpClick={onIconUpClick}
      label={label}
      descriptionLabel={descriptionLabel}
      description={description}
      modal
    />
  </div>
);
