import { default as NextLink } from 'next/link';

const variants = {
  outlined:
    'border-2 border-quaternary text-quaternary hover:border-guild-webDev hover:bg-guild-webDev hover:text-additional-white hover:shadow-button',
  filled:
    'border-2 border-quaternary bg-quaternary text-additional-white hover:border-guild-webDev hover:bg-guild-webDev hover:shadow-button',
  bare: 'hover:underline'
};

interface LinkProps {
  children: React.ReactNode;
  href: string;
  variant: keyof typeof variants;
  className?: string;
}

export const Link = ({ children, href, variant, className, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <a
      className={`w-max rounded-lg py-3 px-6 text-base font-bold leading-tight ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  </NextLink>
);
