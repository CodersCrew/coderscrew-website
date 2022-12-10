import arrow from '@assets/arrow.svg';
import close from '@assets/Close.svg';
import { Icon } from '@componentsIcon';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

import { Hexagon, HexagonProps } from '../../components/Hexagon';
import { colors } from '../../components/Hexagon/lookup';

export type GuildCardProps = Pick<HexagonProps, 'primaryColor' | 'secondaryColor'> & {
  onClick?: MouseEventHandler;
  onIconDownClick?: MouseEventHandler;
  onIconUpClick?: MouseEventHandler;
  id: string;
  label?: string;
  text?: string;
  descriptionLabel?: string;
  description?: string;
  modal?: boolean;
};

const modalCardPClasses = 'py-2 text-base font-normal leading-6 text-secondary';

export const GuildCard = ({
  modal,
  onClick,
  onIconDownClick,
  onIconUpClick,
  primaryColor,
  secondaryColor,
  label,
  text,
  descriptionLabel,
  description,
  id
}: GuildCardProps) => {
  const iconColorClass = primaryColor && colors[primaryColor];

  return !modal ? (
    <article
      id={id}
      className="flex h-39 w-[436px] cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#383838] to-[#38383833] drop-shadow-md"
      onClick={onClick}
      aria-hidden="true"
    >
      <div className="ml-10 h-23 w-24">
        <Hexagon variant="default" primaryColor="white" secondaryColor={secondaryColor} opacity={100} icon />
      </div>
      <div className="ml-7 flex w-2/3 flex-col gap-2 pr-10 text-additional-darkWhite">
        <h3 className="text-2xl font-bold tracking-wide">{label}</h3>
        <p className="text-base font-semibold">{text}</p>
      </div>
    </article>
  ) : (
    <article
      id={id}
      className="container relative flex h-[356px] w-[488px] overflow-hidden rounded-xl bg-additional-darkWhite"
    >
      <section className="flex flex-col items-start py-8 pl-15">
        <div className="flex h-max w-[70%] justify-start py-2">
          <Icon color={iconColorClass} />
          <h5 className="text-2xl font-semibold leading-8 text-primary">{label}</h5>
        </div>
        <p className={modalCardPClasses}>{descriptionLabel}</p>
        <p className={modalCardPClasses}>{description}</p>
      </section>

      <section className="mx-8 flex w-1/5 flex-col items-center justify-start gap-12 px-2 py-11 ">
        <button className="h-8 w-8 cursor-pointer" onClick={onClick} aria-hidden="true">
          <Image sizes="32px" src={close} alt="Close Button" />
        </button>
        <div className="mb-2 rotate-180 cursor-pointer">
          <Image width={16} height={16} src={arrow} alt="Arrow Up" onClick={onIconUpClick} />
        </div>
        <div className="cursor-pointer">
          <Image width={16} height={16} src={arrow} alt="Arrow Down" onClick={onIconDownClick} />
        </div>
      </section>

      <div className="absolute -left-7 -top-6 z-0 h-15 w-15">
        <Hexagon variant="default" primaryColor={primaryColor} opacity={30} />
      </div>
      <div className="absolute -right-8 -bottom-9 h-20 w-20">
        <Hexagon variant="default" primaryColor={primaryColor} opacity={30} />
      </div>
    </article>
  );
};
