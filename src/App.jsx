import React, { Suspense } from "react";
import "./App.css";
import ScrollButton from "./components/ButtonScroll/ScrollButton";
const Navbar = React.lazy(() => import("./components/Navbar/index"));
import { Route, Routes } from "react-router-dom";
import PageLoading from "./utils/PageLoading";
import Error from "./pages/404";
import Komik from "./pages/Komik";
import Reading from "./pages/Reading";
import Footer from "./components/Footer/Footer";
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="min-h-[100vh] pb-[70px] relative">
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<PageLoading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/komik/:endpoint" element={<Komik />} />
        <Route path="/komik/:endpoint/:ch" element={<Reading />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
