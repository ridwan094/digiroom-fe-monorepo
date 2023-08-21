import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/styles/globals.css';
import CMSLayout from '@/layout';
import { AuthProvider, useAuth } from '@/helpers/utils/AuthContext';

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  if (user) {
    // Jika pengguna telah login, tampilkan layout yang sesuai
    return (
      <CMSLayout>
        <Component {...pageProps} />
      </CMSLayout>
    );
  } else {
    // Jika pengguna belum login, tampilkan tanpa layout
    return <Component {...pageProps} />;
  }
}

export default function App(props) {
  return (
    <>
      <Head>
        <title>Auto2000 CMS</title>
      </Head>
      <AuthProvider>
        <Provider store={store}>
          <MyApp {...props} />
        </Provider>
      </AuthProvider>
    </>
  );
}
