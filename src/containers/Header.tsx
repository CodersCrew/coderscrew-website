import BurgerMenu from '@/common/assets/burgerMenu.svg';
import Logo from '@/common/assets/logo.svg';
import { Link } from '@/components';
import { SectionWrapper } from '@/components/PageWrapper';

export const Header = () => (
  <SectionWrapper small className="flex items-center justify-between">
    <Logo className="h-4.5 sm:h-6" />
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
    <BurgerMenu className="h-6 sm:h-8 lg:hidden" />
  </SectionWrapper>
);
