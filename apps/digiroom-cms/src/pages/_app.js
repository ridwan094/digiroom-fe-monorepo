import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/styles/globals.css';
import CMSLayout from '@/layout';
import { AuthProvider, useAuth } from '@/helpers/utils/AuthContext';
import { useEffect } from 'react';
import { setIsMobileScreen, setScreenSize } from '@/store/page/actions';
import { useSelector } from 'react-redux';
import screenBreakpoints from 'src/constants/screen-breakpoints';

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();
  const { screenSize } = useSelector((state) => state.page);
  useEffect(() => {
    store.dispatch(setIsMobileScreen(screenSize?.width < screenBreakpoints.MIN_DESKTOP_SCREEN));
  }, [screenSize?.width]);

  useEffect(() => {
    store.dispatch(
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: window.innerWidth < screenBreakpoints.MIN_DESKTOP_SCREEN,
      })
    );

    window.addEventListener('resize', (event) => {
      store.dispatch(
        setScreenSize({
          width: event.target.innerWidth,
          height: event.target.innerHeight,
          mobile: window.innerWidth < screenBreakpoints.MIN_DESKTOP_SCREEN,
        })
      );
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

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
