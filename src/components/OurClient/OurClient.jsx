import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "./OurClient.scss";
import user from "../../assets/icons/user.png";

const OurClient = () => {
  return (
    <div className="ourClient">
      <div className="container">
        <h1 className="ourClient__title">OUR CLIENTS FEEDBACK</h1>
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
                  Dynamically whiteboard timely models through bricks-and-clicks
                  e-services. Holisticly predominate resource maximizing users
                  through backend leadership skills. Continually mesh team
                  building strategic theme areas without standards compliant
                  users.
                </p>
                <p className="name">JACK MOE</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={user} alt="user" className="icon__user" />
              <div className="swiper__text">
                <p className="title">
                  Dynamically whiteboard timely models through bricks-and-clicks
                  e-services. Holisticly predominate resource maximizing users
                  through backend leadership skills. Continually mesh team
                  building strategic theme areas without standards compliant
                  users.hrough backend leadership skills. Continually mesh team
                  building strategic theme areas without standards compliant
                  users.hrough backend leadership skills. Continually mesh team
                  building strategic theme areas without standards compliant
                  users.
                </p>
                <p className="name">JACK MOE</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
