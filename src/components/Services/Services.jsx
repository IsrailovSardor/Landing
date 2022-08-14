import React, { useState } from "react";
import "./Services.scss";
import { ReactComponent as Collegue } from "../../assets/icons/sevices/colleg.svg";
import { ReactComponent as Paints } from "../../assets/icons/sevices/paint.svg";
import { ReactComponent as Mobile } from "../../assets/icons/sevices/mobile.svg";
import { ReactComponent as Web } from "../../assets/icons/sevices/web.svg";
import { ReactComponent as Links } from "../../assets/icons/sevices/Links.svg";
import FadeInSection from "../../hoc/fade/Fade";
import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
  const [isHover, setIsHover] = useState(false);
  const [item, setItem] = useState(true);

  const items = [
    {
      iconOne: (
        <Collegue
          className="item-icon__show"
          style={{
            transform:
              isHover && item === 0 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 0 ? 0 : 1,
            transition: "0.4s",
          }}
        />
      ),
      iconTwo: (
        <Links
          className="item-icon__hide"
          style={{
            transform:
              isHover && item === 0 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 0 ? 1 : 0,
            transition: "0.4s",
          }}
        />
      ),
    },
    {
      iconOne: (
        <Paints
          className="item-icon__show"
          style={{
            transform:
              isHover && item === 1 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 1 ? 0 : 1,
            transition: "0.4s",
          }}
        />
      ),
      iconTwo: (
        <Links
          className="item-icon__hide"
          style={{
            transform:
              isHover && item === 1 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 1 ? 1 : 0,
            transition: "0.4s",
          }}
        />
      ),
    },
    {
      iconOne: (
        <Mobile
          className="item-icon__show"
          style={{
            transform:
              isHover && item === 2 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 2 ? 0 : 1,
            transition: "0.4s",
          }}
        />
      ),
      iconTwo: (
        <Links
          className="item-icon__hide"
          style={{
            transform:
              isHover && item === 2 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 2 ? 1 : 0,
            transition: "0.4s",
          }}
        />
      ),
    },
    {
      iconOne: (
        <Web
          className="item-icon__show"
          style={{
            transform:
              isHover && item === 3 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 3 ? 0 : 1,
            transition: "0.4s",
          }}
        />
      ),
      iconTwo: (
        <Links
          className="item-icon__hide"
          style={{
            transform:
              isHover && item === 3 ? "rotateZ(360deg)" : "rotateZ(0deg)",
            opacity: isHover && item === 3 ? 1 : 0,
            transition: "0.4s",
          }}
        />
      ),
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="services">
      <div className="container">
        <FadeInSection>
          <p className="services__title">{t(`services.head.0`)}</p>
        </FadeInSection>
        <div className="services__block">
          {items.map((item, index) => (
            <ServicesCard
              key={index}
              item={item}
              index={index}
              setIsHover={setIsHover}
              setItem={setItem}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
