import { AuthProvider, useAuth } from '@/helpers/utils/AuthContext';
import { store } from '@/store';
import Head from 'next/head';
import CMSLayout from '@/layout';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function MyApp({ Component, pageProps }) {
  return (
    <ProtectedRoute>
      <CMSLayout>
         <Component {...pageProps} />
      </CMSLayout>
    </ProtectedRoute>
  )
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
