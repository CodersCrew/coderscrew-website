import '@/common/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href="/coders-crew.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
