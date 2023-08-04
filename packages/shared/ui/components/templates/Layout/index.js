import { Footer, Navbar } from "../../organism";

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
