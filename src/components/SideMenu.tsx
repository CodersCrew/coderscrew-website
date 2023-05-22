import CrossMenu from '@/common/assets/crossMenu.svg';

import { Link } from './Link';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <>
      <div className={`fixed inset-0  opacity-20 lg:hidden ${isOpen ? 'bg-primary' : ''}`} />
      <div
        className={`fixed inset-y-0 left-0 w-70 bg-primary text-tetriary transition-all ${
          !isOpen ? '-translate-x-70' : ''
        }`}
      >
        <button onClick={handleClick} className="m-6 ml-auto flex">
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
          </Link>{' '}
          <Link className="block py-4 px-5" variant="bare" href="/wspolpraca">
            Współpraca
          </Link>{' '}
          <Link className="block py-4 px-5" variant="bare" href="/rekrutacja">
            Dołącz do nas
          </Link>
        </nav>
      </div>
    </>
  );
};
