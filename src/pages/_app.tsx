import '@/common/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href="/coders-crew.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
