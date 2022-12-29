import Logo from '@/common/assets/logo.svg';
import { Link } from '@/components';

export const Header = () => (
  <div className="flex items-center justify-between px-30 py-10">
    <Logo className="h-6" />
    <div className="flex gap-4">
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
  </div>
);
