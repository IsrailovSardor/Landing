import React, { useEffect, useState } from "react";
import "./Interested.scss";
import { useTranslation } from "react-i18next";
const Interested = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const {t } = useTranslation()
  return (
    <div className="interested">
      <div className="bgs">
        <div
          className="bg-first"
          style={{ transform: `translateY(-${(offsetY - 1000) * 0.5}px)` }}
        ></div>
        <div
          className="bg-second"
          style={{ transform: `translateY(${(offsetY - 2000) * 0.5}px)` }}
        ></div>
        <div
          className="bg-fourth"
          style={{ transform: `translateY(-${(offsetY - 1700) * 0.5}px)` }}
        ></div>
        <div
          className="bg-third"
          style={{ transform: `translateY(${(offsetY - 2000) * 0.5}px)` }}
        ></div>
      </div>
      <div className="container">
        <h1 className="interested__title">{t("interested.0")}</h1>
        <button className="interested__bnt">{t("interested.1")}</button>
      </div>
    </div>
  );
};

export default Interested;
