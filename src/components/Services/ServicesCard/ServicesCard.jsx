import React from 'react';
import FadeInSection from '../../../hoc/fade/Fade';

const ServicesCard = ({item,index, setIsHover, setItem, t,}) => {
    return (
        <FadeInSection>
              <div
                key={index}
                className="item"
                onMouseEnter={() => {
                  setIsHover(true);
                  setItem(index);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                  setItem(index);
                }}
              >
                <div className="item-icons">
                  {item.iconOne}
                  {item.iconTwo}
                </div>
                <p className="item-title">{t(`services.title.${index}`)}</p>
                <p className="item-descr">
                  {t(`services.description.${index}`)}
                </p>
              </div>
            </FadeInSection>
    );
};

export default ServicesCard;