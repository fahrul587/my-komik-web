import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { getRecomendations } from "../../api";
import Slide from "./Slide";

const Slider = () => {
  const [recom, setRecom] = useState([]);

  useEffect(() => {
    getRecomendations().then((response) =>
      setRecom(response.data.results.data)
    );
  }, []);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper max-h-[200px]"
    >
      {recom.length !== 0 &&
        recom.map((r, i) => (
          <SwiperSlide key={i}>
            <Link to={"/komik/" + r.endpoint}>
              <Slide recom={r} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
