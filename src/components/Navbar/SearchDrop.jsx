import { Link } from "react-router-dom";
import SearchDropItems from "./SearchDropItems";

const SearchDrop = ({ searchData, setInputValue }) => {

  return (
    <div className="absolute rounded-lg overflow-hidden hidden hover:flex flex-col group-focus-within:block shadow-md w-full mt-2 top-full border bg-white/90 dark:bg-slate-600/90 z-30">
      <ul>
        {searchData.map((s) => (
          <Link onClick={() => setInputValue("")} key={s.title} to={"/komik/" + s.endpoint}>
            <SearchDropItems komik={s} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchDrop;
