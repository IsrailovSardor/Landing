import React from "react";
import { useTranslation } from "react-i18next";
import one from "../../assets/images/work/2022-08-15 (3).png";
import two from "../../assets/images/work/2022-08-15 (6).png";
import three from "../../assets/images/work/2022-08-15 (9).png";
import FadeInSection from "../../hoc/fade/Fade";
import "./OurWork.scss";
const OurWork = () => {
  const {t} = useTranslation()
  return (
    <div className="ourWork">
      <FadeInSection>
      <h1 className="ourWork__title">{t("ourWork.0")}</h1>
      </FadeInSection>
      <FadeInSection>
      <p className="ourWork__descr">{t("ourWork.1")}</p>
      </FadeInSection>
      <div className="work__block">
        <div className="work-item">
          <img src={one} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={two} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={three} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={one} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={two} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={three} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={one} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
        <div className="work-item">
          <img src={three} alt="" className="work-item__img" />
          <div className="work-item__text">
            <p className="text-title">Name</p>
            <p className="text-descr">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
