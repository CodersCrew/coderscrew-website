import { PropsWithChildren } from 'react';

import { Header } from '@/containers';
import { Footer } from '@/containers';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export { Layout };
