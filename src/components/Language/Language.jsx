import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./Language.scss";

const languages = [
  {
    code: "ru",
    name: "Russia",
    country_code: "ru",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Language = ({ dropDown, serDropDown }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Hazel");
  }, [currentLanguage, t]);
  return (
    <>
      {dropDown ? (
        <div className="dropDown__language">
          {languages.map(({ code, name, country_code, img }) => (
            <li key={country_code} className="lui">
              <button
                className="accordion__button"
                onClick={() => {
                  i18next.changeLanguage(code);
                  serDropDown(false);
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Language;
