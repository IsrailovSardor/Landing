import React from "react";
import "./Previe.scss";
import Web from "./Web/Web";
import headerImg from "../../assets/images/header_img.jpg";
import { useTranslation } from "react-i18next";

const Previe = () => {
  const { t } = useTranslation();
  return (
    <div className="previe">
      <div className="container">
        <div className="previe__text">
          <img src={headerImg} alt="" className="bg__img" />
          <h1 className="previe__title">{t("previe.0")}</h1>
          <p className="previe__descr">{t("previe.1")}</p>
          <button className="previe__btn">{t("previe.2")}</button>
        </div>
        <div className="previe__icon">
          <Web />
        </div>
      </div>
    </div>
  );
};

export default Previe;
