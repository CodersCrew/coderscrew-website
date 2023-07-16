import Logo from '@/assets/logo.svg';
import { Link, SectionWrapper, SideMenu } from '@/components';

export const Header = () => (
  <SectionWrapper small className="flex items-center justify-between">
    <Link variant="bare" href="/">
      <Logo className="h-4.5 sm:h-6" />
    </Link>
    <div className="hidden gap-4 lg:flex">
      <Link variant="bare" href="#guilds">
        Zespoły
      </Link>
      <Link variant="bare" href="#projects">
        Projekty
      </Link>
      <Link variant="outlined" href="/partnerzy">
        Współpraca
      </Link>
      <Link variant="filled" href="/rekrutacja">
        Dołącz do nas
      </Link>
    </div>
    <SideMenu />
  </SectionWrapper>
);
