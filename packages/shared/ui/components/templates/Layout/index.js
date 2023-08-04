import Navbar from "ui/components/organism/Navbar";
import constants from "@/constants";
import { Footer } from "../../organism";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={`bg-white`}>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
