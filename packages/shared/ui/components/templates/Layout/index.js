import { Footer, Navbar } from '../../organism';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`bg-white`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
