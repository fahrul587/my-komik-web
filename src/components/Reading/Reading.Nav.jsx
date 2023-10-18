import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Nav = ({ chapterList }) => {
  const { endpoint } = useParams();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    navigate(`/komik/${endpoint}/${target.value}`);
  };

  return (
    <div className="bg-white p-2 dark:dark:bg-[#343a40] mt-5 rounded-md max-[285px]:justify-center gap-2 flex flex-wrap justify-between items-center">
      <select
        onChange={handleChange}
        value={chapterList.find((c) => "current" in c).endpoint}
        className="rounded-full min-[285px]:max-w-[150px] w-full text-sm dark:text-slate-100 p-1 overflow-hidden cursor-pointer bg-slate-200 dark:bg-[#545a60]"
      >
        <option disabled>select</option>
        {chapterList?.map((c, i) => (
          <option value={c.endpoint} key={i}>
            {c.name}
          </option>
        ))}
      </select>
      <div className="flex gap-3">
        {chapterList?.find((c) => "prev" in c) ? (
          <Link
            to={`/komik/${endpoint}/${
              chapterList?.find((c) => "prev" in c).endpoint
            }`}
            className="bg-blue-400 p-1 px-2 text-slate-100 hover:bg-blue-500 rounded-full"
          >
            Prev
          </Link>
        ) : (
          <Link
            to={"#"}
            onClick={(e) => e.preventDefault()}
            className="border p-1 px-2 text-slate-300 rounded-full"
          >
            Prev
          </Link>
        )}

        {chapterList?.find((c) => "next" in c) ? (
          <Link
            to={`/komik/${endpoint}/${
              chapterList?.find((c) => "next" in c).endpoint
            }`}
            className="bg-blue-400 p-1 px-2 text-slate-100 hover:bg-blue-500 rounded-full"
          >
            Next
          </Link>
        ) : (
          <Link
            to={"#"}
            onClick={(e) => e.preventDefault()}
            className="border p-1 px-2 text-slate-300 rounded-full"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
