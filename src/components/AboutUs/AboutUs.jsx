import React from "react";
import "./AboutUs.scss";
import Fade from "../../hoc/fade/Fade";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <div className="aboutUs">
      <div className="container">
        <div className="line"></div>
        <div className="aboutUs__text">
          <Fade>
            <p className="header-text">{t("about.0")}</p>
          </Fade>
          <Fade>
            <h1 className="title-text">{t("about.1")}</h1>
          </Fade>
          <Fade>
            <p className="descr-text">
            {t("about.2")}
            </p>
          </Fade>
        </div>
        <div className="aboutUs__work">
          <Fade>
            <div className="work__block">
              <p className="work__title">1</p>
              <p className="work__descr">{t("about.3")}</p>
            </div>
          </Fade>
          <Fade>
            <div className="work__block">
              <p className="work__title">20 +</p>
              <p className="work__descr">{t("about.4")}</p>
            </div>
          </Fade>
          <Fade>
            <div className="work__block">
              <p className="work__title">5</p>
              <p className="work__descr">{t("about.5")}</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
