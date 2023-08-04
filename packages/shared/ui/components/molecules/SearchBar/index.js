import Button from "ui/components/atoms/Button";
import { setSearchValue } from "@/store/example/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
    <div className="flex gap-2 p-8 ">
      <Button onClick={handleOnSubmit} />
    </div>
  );
};

export default SearchBar;
