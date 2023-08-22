import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/styles/globals.css';
import Layout from 'ui/components/templates/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.Js: Atomic design boilerplate</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
