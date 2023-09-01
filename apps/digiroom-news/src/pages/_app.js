import { useEffect } from 'react';
import { store, wrapper } from '@/store';
import '@/styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { setIsMobileScreen, setScreenSize } from '@/store/page/actions';
import { useSelector } from 'react-redux';
import screenBreakpoints from 'src/constants/screen-breakpoints';
import Layout from 'ui/components/templates/Layout';

const App = ({ Component, pageProps }) => {
  const { screenSize } = useSelector((state) => state.page);
  useEffect(() => {
    store.dispatch(setIsMobileScreen(screenSize?.width <= screenBreakpoints.MIN_DESKTOP_SCREEN));
  }, [screenSize?.width]);

  useEffect(() => {
    store.dispatch(
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: window.innerWidth <= screenBreakpoints.MIN_DESKTOP_SCREEN,
      })
    );

    window.addEventListener('resize', (event) => {
      store.dispatch(
        setScreenSize({
          width: event.target.innerWidth,
          height: event.target.innerHeight,
          mobile: window.innerWidth <= screenBreakpoints.MIN_DESKTOP_SCREEN,
        })
      );
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

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
};

export default wrapper.withRedux(App);
