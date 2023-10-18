import React, { Suspense, useEffect, useState } from "react";
import { Container } from "./List.style";
import { Link } from "react-router-dom";
import { getAll } from "../../api";
const Cards = React.lazy(() => import("./Cards"));
import CardsLoading from "../../utils/CardsLoading";
import SideContent from "./SideContent";

const ListContainer = () => {
  const [allSeries, setAllSeries] = useState([]);

  useEffect(() => {
    getAll().then((response) => setAllSeries(response.data.results.data));
  }, []);

  return (
    <Container>
      <div className="w-full flex gap-2 flex-wrap md:flex-nowrap items-start">
        <div className="grow flex flex-wrap gap-2">
          <div className="w-full">
            <Container.Header>All Series</Container.Header>
            <Container.Content>
              {allSeries.length !== 0 &&
                allSeries.map((all, i) => (
                  <Link key={all.title} to={"/komik/" + all.endpoint}>
                    <Suspense fallback={<CardsLoading />}>
                      <Cards allSeries={all} />
                    </Suspense>
                  </Link>
                ))}
            </Container.Content>
          </div>
        </div>
        <div className="flex-none shrink-0 w-full md:w-[300px] xl:w-[400px]">
          <Container.Header>Populer</Container.Header>
          <SideContent />
        </div>
      </div>
    </Container>
  );
};

export default ListContainer;
