import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/styles/globals.css';
import CMSLayout from '@/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Auto2000 CMS</title>
      </Head>
      <Provider store={store}>
        <CMSLayout>
          <Component {...pageProps} />
        </CMSLayout>
      </Provider>
    </>
  );
}
