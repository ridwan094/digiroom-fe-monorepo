import { store } from '@/store';
import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.Js: Atomic design boilerplate</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
