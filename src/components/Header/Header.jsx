import React, { useState } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import Language from "../Language/Language";
import { ReactComponent as ArrowUp } from "../../assets/icons/up_arrow.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
const Header = () => {
  const { t } = useTranslation();
  const [dropDown, serDropDown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const links = [
    { href: "/" },
    { href: "/" },
    { href: "/" },
    { href: "/" },
    { href: "/" },
    { href: "/" },
  ];
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo" />
        <ul className="nav">
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{t(`navLinks.${index}`)}</a>
            </li>
          ))}
          <li onClick={() => serDropDown(!dropDown)} >
          <p>{t("navLinks.")}</p>
            <ArrowUp className={`arrow ${dropDown ? "active_row" : ""}`} />
          </li>
          <Language dropDown={dropDown} serDropDown={serDropDown} />
        </ul>
        <div className="burgerMenu" onClick={() => setBurgerMenu(!burgerMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {burgerMenu ? (
          <BurgerMenu
            dropDown={dropDown}
            serDropDown={serDropDown}
            links={links}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
