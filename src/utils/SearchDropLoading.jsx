import React from "react";
import { ThreeDots } from "react-loader-spinner";

const SearchDropLoading = () => {
  return (
    <li className="flex justify-center items-center">
      <ThreeDots
        height="50"
        width="50"
        radius="1"
        color="cyan"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </li>
  );
};

export default SearchDropLoading;
