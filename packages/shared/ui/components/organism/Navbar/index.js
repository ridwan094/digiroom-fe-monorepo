import AppLogo from "ui/components/atoms/AppLogo";
import SearchBar from "ui/components/molecules/SearchBar";
import Confirmation from "ui/components/molecules/SearchBar";
import constants from "@/constants";

const Navbar = () => {
  return (
    <div
      style={{
        height: constants.NAVBAR_HEIGHT,
      }}
      className="flex flex-row bg-yellow-400 flex-1 items-center justify-between text-black px-12"
    >
      <AppLogo />
      <SearchBar />
    </div>
  );
};

export default Navbar;
