import Logo from '@/assets/logo.svg';
import { Link, SectionWrapper, SideMenu } from '@/components';

export const Header = () => (
  <SectionWrapper small className="flex items-center justify-between">
    <Link variant="bare" href="/">
      <Logo className="h-4.5 sm:h-6" />
    </Link>
    <div className="hidden gap-4 lg:flex">
      <Link variant="bare" href="/zespoly">
        Zespoły
      </Link>
      <Link variant="bare" href="/projekty">
        Projekty
      </Link>
      <Link variant="bare" href="/partnerzy">
        Partnerzy
      </Link>
      <Link variant="outlined" href="/wspolpraca">
        Współpraca
      </Link>
      <Link variant="filled" href="/rekrutacja">
        Dołącz do nas
      </Link>
    </div>
    <SideMenu />
  </SectionWrapper>
);
