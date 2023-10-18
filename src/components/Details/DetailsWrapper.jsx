import Sysnopsis from "./Sysnopsis";

import ChapterList from "./ChapterList";
import DetailsHeader from "./DetailsHeader";

const DetailsWrapper = ({ details }) => {
  return (
    <>
      <DetailsHeader details={details} />
      <Sysnopsis sysnopsis={details.sysnopsis} />
      <ChapterList chapter={details.chapter_list} />
    </>
  );
};

export default DetailsWrapper;
