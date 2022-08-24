import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "./OurClient.scss";
import user from "../../assets/icons/user.png";
import { useTranslation } from "react-i18next";

const OurClient = () => {
  const {t} = useTranslation()
  return (
    <div className="ourClient">
      <div className="container">
        <h1 className="ourClient__title">{t(`ourClient.head.0`)}</h1>
        <div className="ourClient__block">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={user} alt="user" className="icon__user" />
              <div className="swiper__text">
                <p className="title">
                {t(`ourClient.cleint1.0`)}
                </p>
                <p className="name"> {t(`ourClient.cleint1.1`)}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={user} alt="user" className="icon__user" />
              <div className="swiper__text">
                <p className="title">
                {t(`ourClient.cleint2.0`)}
                </p>
                <p className="name">{t(`ourClient.cleint2.1`)}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
