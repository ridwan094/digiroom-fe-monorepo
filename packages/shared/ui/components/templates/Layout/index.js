import Navbar from "@/components/organisms/Navbar";
import constants from "@/constants";

const Layout = ({ children }) => {
  return (
    <div className="text-black">
      <Navbar />
      <div className={`h-[calc(100vh_-_100px)] bg-slate-100 p-12`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
