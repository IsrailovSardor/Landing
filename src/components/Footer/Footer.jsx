import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.scss";
import { ReactComponent as Facebook } from "../../assets/icons/social_meadia/fac.svg";
import { ReactComponent as Instagram } from "../../assets/icons/social_meadia/instagramm.svg";
import { ReactComponent as Linkidin } from "../../assets/icons/social_meadia/linkidin.svg";
import { ReactComponent as Vk } from "../../assets/icons/social_meadia/vk.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={logo} alt="" />
        <div className="footer__media">
          <Facebook className="media__icon" />
          <Vk className="media__icon" />
          <Instagram className="media__icon" />
          <Linkidin className="media__icon" />
        </div>
        <p>Hazel © TreeThemes 2022</p>
      </div>
    </div>
  );
};

export default Footer;
