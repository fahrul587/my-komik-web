import React from 'react'
const Carousell = React.lazy(() => import("../components/Carousel/Index"))
const ListContainer = React.lazy(() => import('../components/ListContent/Index'))
const Home = () => {
  return (
    <>
    <Carousell />
    <ListContainer />
    </>
  )
}

export default Home