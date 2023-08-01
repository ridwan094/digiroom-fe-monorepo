import Button from "ui/components/atoms/Button";
import TextInput from "ui/components/atoms/TextInput";
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
      <TextInput onChange={handleOnChange} />
      <Button onClick={handleOnSubmit} />
    </div>
  );
};

export default SearchBar;
