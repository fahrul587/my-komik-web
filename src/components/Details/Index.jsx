import React, { Suspense, useEffect, useRef, useState } from "react";
import { Container } from "../ListContent/List.style";
import SideContent from "../ListContent/SideContent";
import { useParams } from "react-router-dom";
import { getDetails } from "../../api";
import { scroll } from "../ButtonScroll/scroll";
import DetailsHeaderLoading from "../../utils/DetailsHeaderLoading";
import DataNotFound from "../../utils/DataNotFound";
import DetailsWrapper from "./DetailsWrapper";

const Details = () => {
  const { endpoint } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toTop = useRef(document.documentElement);

  useEffect(() => {
    document.title = endpoint;
    getDetails(endpoint)
      .then(setIsLoading(true))
      .then(scroll(toTop))
      .then((response) => {
        setIsLoading(false);
        setDetails(response.data.newDetail[0]);
        setError(false);
      })
      .catch((err) => {
        err ? setError(true) : null;
        setIsLoading(false);
      });
  }, [endpoint]);

  return (
    <Container className={"my-5"}>
      <div className="w-full flex gap-2 flex-wrap md:flex-nowrap items-start">
        <div className="grow flex flex-wrap gap-3">
          {isLoading ? (
            <DetailsHeaderLoading />
          ) : error ? (
            <DataNotFound />
          ) : (
            details.length !== 0 && <DetailsWrapper details={details} />
          )}
        </div>
        <div className="flex-none shrink-0 w-full md:w-[300px] xl:w-[400px]">
          <Container.Header>Populer</Container.Header>
          <SideContent />
        </div>
      </div>
    </Container>
  );
};

export default Details;
