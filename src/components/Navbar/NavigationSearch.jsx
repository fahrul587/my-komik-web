import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchDrop from "./SearchDrop";
import { search } from "../../api";

const NavigationSearch = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  const clearData = () => {
    setDataSearch([])
  }

  useEffect(() => {
    if (inputValue.length >= 3) {
      search(1, inputValue).then((response) => {
        setDataSearch(response.data.results.data);
      });
    } else {
      clearData()
    }
  }, [inputValue]);

  return (
    <div
      className={
        "group relative flex border-2 gap-0.5 pr-1 py-1 w-full sm:w-[300px] focus-within:bg-white duration-200 rounded-full"
      }
    >
      <input
        type="search"
        onChange={({ target }) => setInputValue(target.value)}
        value={inputValue}
        placeholder="search..."
        className="peer font-medium placeholder:text-slate-200 w-full grow text-slate-200 focus:text-slate-500 outline-none bg-transparent px-2"
      />
      <button type="button">
        <FaSearch className="fill-white group-focus-within:fill-slate-500" />
      </button>
      {dataSearch.length !== 0 && <SearchDrop setInputValue={setInputValue} searchData={dataSearch} />}
    </div>
  );
};

export default NavigationSearch;
