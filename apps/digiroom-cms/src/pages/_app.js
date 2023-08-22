import { AuthProvider, useAuth } from '@/helpers/utils/AuthContext';
import { useEffect } from 'react';
import { store } from '@/store';
import Head from 'next/head';
import Router from 'next/router';
import CMSLayout from '@/layout';
import LoginPage from './login';
import { Provider } from 'react-redux';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  useEffect(() => {
    if(!user) {
      Router.push('/')
    }
  }, [])

  if (user) {
    // Jika pengguna telah login, tampilkan layout yang sesuai
    return (
      <CMSLayout>
        <Component {...pageProps} />
      </CMSLayout>
    );
  } else {
    // Jika pengguna belum login
    return <LoginPage />;
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
