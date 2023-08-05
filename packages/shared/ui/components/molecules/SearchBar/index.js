import { setSearchValue } from "@/store/example/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../atoms";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    console.log("onSUBMIT", search);
    dispatch(setSearchValue(search));
  };

  const handleOnChange = (v) => {
    console.log("ONCHANGE", v.target.value);
    setSearch(v.target.value);
  };

  return (
    <>
      <Input type="text" onChange={handleOnChange} value={search} icon={MdSearch} />
    </>
  );
};

export default SearchBar;
