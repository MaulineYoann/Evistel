import React, { useContext } from "react";
import Bots from "../Bots/Bots";
import { BotContext } from "../../Context/botContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.scss";

const Carousel = () => {
  const { botRequest } = useContext(BotContext);

  return (
    <>
      <Swiper
        //  pagination={{
        //  dynamicBullets: true,
        //  clickable: false,
        //  bulletActiveClas: "activeBullet",
        //  }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={1.8}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
      >
        <div>
          {botRequest.map((bots) => (
            <SwiperSlide className="slide" key={bots.id}>
              <Bots bots={bots} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
