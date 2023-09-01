import Head from 'next/head';
import { Provider } from 'react-redux';
import { store, wrapper } from 'ui/store'
import '@/styles/globals.css';
import Layout from 'ui/components/templates/Layout';
import { useSelector } from 'react-redux';
import { setIsMobileScreen, setScreenSize } from 'ui/store/page/actions';
import screenBreakpoints from 'ui/constants/screen-breakpoints';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  const { screenSize } = useSelector((state) => state.page);
  console.log('digiroom-news:'+ screenSize)
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

export default wrapper.withRedux(App);
