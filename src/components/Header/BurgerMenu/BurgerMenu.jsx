import React from "react";
import Language from "../../Language/Language";
import "./BurgerMenu.scss";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowUp } from "../../../assets/icons/up_arrow.svg";

const BurgerMenu = ({ dropDown, serDropDown, links }) => {
  const { t } = useTranslation();

  return (
    <div className="mobile__menu">
      <ul className="navs">
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{t(`navLinks.${index}`)}</a>
          </li>
        ))}
        <li onClick={() => serDropDown(!dropDown)}>
          <Language dropDown={dropDown} serDropDown={serDropDown} />
          <a href="/#">{t("navLinks.6")}</a>
          <ArrowUp className={`arrow ${dropDown ? "active_row" : ""}`} />
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
