import React from 'react';
import '../../styles/globals.css';
import '@mountain-app/web-components/dist/tailwind.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
