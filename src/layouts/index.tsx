import { PropsWithChildren } from 'react';

import { Header } from '@/containers';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
  </>
);

export { Layout };
