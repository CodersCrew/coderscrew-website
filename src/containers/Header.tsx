import BurgerMenu from '@/common/assets/burgerMenu.svg';
import Logo from '@/common/assets/logo.svg';
import { Link } from '@/components';

export const Header = () => (
  <div className="m-auto flex max-w-screen-2xl items-center justify-between p-4 lg:py-10 lg:px-15 xl:px-30">
    <Logo className="h-6 pl-1" />
    <div className="hidden gap-4 lg:flex">
      <Link variant="bare" href="#">
        Zespoły
      </Link>
      <Link variant="bare" href="#">
        Projekty
      </Link>
      <Link variant="bare" href="#">
        Partnerzy
      </Link>
      <Link variant="outlined" href="#">
        Współpraca
      </Link>
      <Link variant="filled" href="#">
        Dołącz do nas
      </Link>
    </div>
    <BurgerMenu className="lg:hidden" />
  </div>
);
