import DataNotFound from "../../utils/DataNotFound";
import { Container } from "../ListContent/List.style";
import Head from "./ChapterList.Head";
import List from "./ChapterList.List";

const ChapterList = ({ chapter }) => {
  return (
    <div className="bg-white dark:bg-[#343a40] w-full pb-2 max-h-[400px] flex flex-col gap-2">
      <Container.Header className={"py-2 font-sans font-medium"}>
        Chapter List
      </Container.Header>
      {chapter.length === 0 ? (
        <DataNotFound />
      ) : (
        <>
          <Head chapter={chapter} />
          <List chapter={chapter} />
        </>
      )}
    </div>
  );
};

export default ChapterList;
