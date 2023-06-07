import NextLink from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  outlined:
    'font-bold border-2 border-quaternary text-quaternary hover:border-guild-webDev hover:bg-guild-webDev hover:text-additional-white hover:shadow-button',
  filled:
    'font-bold border-2 border-quaternary bg-quaternary text-additional-white hover:border-guild-webDev hover:bg-guild-webDev hover:shadow-button',
  bare: 'font-semibold hover:underline'
};

type LinkProps = {
  children: ReactNode;
  href: string;
  variant: keyof typeof variants;
  className?: string;
};

export const Link = ({
  children,
  href,
  variant,
  className,
  ...props
}: LinkProps) => (
  <NextLink href={href} passHref>
    <span
      className={twMerge(
        'flex w-max items-center justify-center rounded-lg px-6 py-3 text-base leading-tight transition-colors duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  </NextLink>
);
