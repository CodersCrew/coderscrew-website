import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import BurgerMenu from '@/common/assets/burgerMenu.svg';
import CrossMenu from '@/common/assets/crossMenu.svg';

import { Link } from './Link';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <BurgerMenu className="z-50 h-6 sm:h-8 lg:hidden" onClick={toggleMenu} />
      <div
        className={twMerge(
          'fixed inset-0 -translate-x-full bg-primary opacity-20 transition-all duration-[50ms]',
          isOpen && 'translate-x-0 '
        )}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-70 bg-primary text-tetriary transition-all lg:hidden ${
          !isOpen ? '-translate-x-70' : ''
        }`}
      >
        <button onClick={toggleMenu} className="m-6 ml-auto flex">
          <CrossMenu />
        </button>
        <nav className="flex-grow">
          <Link className="block py-4 px-5" variant="bare" href="/zespoly">
            Zespoły
          </Link>
          <Link className="block py-4 px-5" variant="bare" href="/projekty">
            Projekty
          </Link>
          <Link className="block py-4 px-5" variant="bare" href="/partnerzy">
            Partnerzy
          </Link>
          <Link className="block py-4 px-5" variant="bare" href="/wspolpraca">
            Współpraca
          </Link>
          <Link className="block py-4 px-5" variant="bare" href="/rekrutacja">
            Dołącz do nas
          </Link>
        </nav>
      </div>
    </>
  );
};
