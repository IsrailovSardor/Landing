import React, { useEffect, useState } from "react";
import "./Interested.scss";
import second from "../../assets/images/interestid/first.webp";
const Interested = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="interested">
      <div className="bgs">
        <div
          className="bg-first"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        ></div>
        <div
          className="bg-second"
          style={{ transform: `translateY(${(offsetY - 2000) * 0.3}px)` }}
        ></div>
        <div
          className="bg-fourth"
          style={{ transform: `translateY(${(offsetY - 500) * 0.3}px)` }}
        ></div>
        <div
          className="bg-third"
          style={{ transform: `translateY(-${(offsetY - 2000) * 0.3}px)` }}
        ></div>
      </div>
      <div className="container">
        <h1 className="interested__title">ЗАИНТЕРЕСОВАНЫ НАШИМИ УСЛУГАМИ?</h1>
        <button className="interested__bnt">Заказать</button>
      </div>
    </div>
  );
};

export default Interested;
