import { useState } from 'react';

import BurgerMenu from '@/assets/burgerMenu.svg';
import CrossMenu from '@/assets/crossMenu.svg';

import { Backdrop } from '../Backdrop';
import { Link } from '../Link';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(current => !current);
  };

  return (
    <>
      <BurgerMenu className="z-50 h-6 sm:h-8 lg:hidden" onClick={toggleMenu} />
      {isOpen && <Backdrop background onClick={toggleMenu} />}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-70 bg-primary text-tetriary transition-all lg:hidden ${
          !isOpen ? '-translate-x-70' : ''
        }`}
      >
        <button onClick={toggleMenu} className="m-6 ml-auto flex">
          <CrossMenu />
        </button>
        <nav className="flex-grow">
          <Link className="block px-5 py-4" variant="bare" href="/zespoly">
            Zespoły
          </Link>
          <Link className="block px-5 py-4" variant="bare" href="#projects">
            Projekty
          </Link>
          <Link className="block px-5 py-4" variant="bare" href="/partnerzy">
            Współpraca
          </Link>
          <Link className="block px-5 py-4" variant="bare" href="/rekrutacja">
            Dołącz do nas
          </Link>
        </nav>
      </div>
    </>
  );
};
