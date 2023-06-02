import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionWrapperProps = {
  children: ReactNode;
  small?: boolean;
  className?: string;
  id?: string;
};

export const SectionWrapper = ({
  children,
  small = false,
  className,
  id
}: SectionWrapperProps) => {
  const classes = twMerge(
    'mx-auto max-w-screen-2xl px-4 sm:px-8 xl:px-30',
    small ? 'py-4 sm:py-8 lg:py-10' : 'py-8 md:py-18 lg:py-24',
    className
  );

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
};
