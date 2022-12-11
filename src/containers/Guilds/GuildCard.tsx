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
      className="mx-2 flex h-[180px] w-[358px] cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#383838] to-[#38383833] drop-shadow-md md:mx-0 md:h-39 md:w-[436px]"
      onClick={onClick}
      aria-hidden="true"
    >
      <div className="ml-6 h-19 w-21 md:ml-10 md:h-23 md:w-24">
        <Hexagon variant="default" primaryColor="white" secondaryColor={secondaryColor} opacity={100} icon />
      </div>
      <div className="ml-5 flex w-2/3 flex-col gap-2 pr-10  text-additional-darkWhite md:ml-7">
        <h3 className="text-xl font-semibold tracking-wide md:text-2xl">{label}</h3>
        <p className="text-base font-normal">{text}</p>
      </div>
    </article>
  ) : (
    <article
      id={id}
      className="container relative mx-4 flex w-[400px] overflow-hidden rounded-xl bg-additional-darkWhite sm:h-[356px]  sm:w-[488px]"
    >
      <section className="flex flex-col items-start py-8 pl-15">
        <div className="flex h-max w-[70%] justify-start py-2">
          <Icon color={iconColorClass} />
          <h5 className="text-2xl font-semibold leading-8 text-primary">{label}</h5>
        </div>
        <p className={modalCardPClasses}>{descriptionLabel}</p>
        <p className={modalCardPClasses}>{description}</p>
      </section>

      <section className="mx-8 hidden w-1/5 flex-col items-center justify-start gap-12 px-2 py-11 sm:visible sm:flex">
        <button className="absolute h-8 w-8 cursor-pointer sm:static" onClick={onClick} aria-hidden="true">
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
