import React, { useEffect, useRef, useState } from "react";
import { Container } from "../ListContent/List.style";
import Header from "./Reading.Header";
import { useParams } from "react-router-dom";
import { getChapter } from "../../api";
import { scroll } from "../ButtonScroll/scroll";
import DetailsHeaderLoading from "../../utils/DetailsHeaderLoading";
import DataNotFound from "../../utils/DataNotFound";
import Nav from "./Reading.Nav";
import PageReader from "./Reading.Main";

const ReadingIndex = () => {
  const [chapter, setChapter] = useState([]);
  const { endpoint, ch } = useParams();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toTop = useRef(document.documentElement);

  useEffect(() => {
    document.title = ch
    setIsLoading(true)
    scroll(toTop)
    setError(false)
    getChapter(endpoint, ch)
      .then((response) => {
        setIsLoading(false);
        setChapter(response);
      })
      .catch((err) => {
        console.log(err);
        err ? setError(true) : null;
        setIsLoading(false);
      });
  }, [endpoint, ch]);

  return (
    <Container className={"my-5"}>
      {isLoading ? (
        <DetailsHeaderLoading />
      ) : error ? (
        <DataNotFound />
      ) : (
        chapter.length !== 0 && (
          <>
            <Header chapter={chapter} endpoint={endpoint} />
            <Nav chapterList={chapter.chapter_list} />
            <PageReader pageList={chapter.page_list} />
            <Nav chapterList={chapter.chapter_list} />
          </>
        )
      )}
    </Container>
  );
};

export default ReadingIndex;
