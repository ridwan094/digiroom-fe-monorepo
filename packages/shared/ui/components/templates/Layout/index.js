import { Footer, Navbar } from "../../organism";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`h-[calc(100vh_-_100px)] bg-slate-100 p-12`}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
