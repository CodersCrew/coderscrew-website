/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import './index.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
