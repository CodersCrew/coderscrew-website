import { twMerge } from 'tailwind-merge';

type SeparatorProps = {
  className?: string;
};

export const Separator = ({ className }: SeparatorProps) => (
  <div className={twMerge('h-[1px] w-10 rotate-90 bg-gradient-to-r from-white to-white/5 lg:ml-9', className)} />
);
