import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./GetTouch.scss";
const GetTouch = () => {
  const [value, setValue] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="getTouch">
        <div
          className="bg-mac"
          style={{ transform: `translateY(${(offsetY - 3604 ) * 0.5}px)` }}
        ></div>
      <div className="container">
        <h1 className="getTouch__title">{t(`form.0`)}</h1>
        <p className="getTouch__descr">{t(`form.1`)}</p>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="from__one">
            <div className="input__block">
              <input
                type="text"
                placeholder={t(`form.2`)}
                className="input"
                {...register("firstName", {
                  required: `${t(`form.6`)}`,
                  minLength: {
                    value: 4,
                    message: `${t(`form.7`)}`,
                  },
                })}
              />
              {errors?.firstName && (
                <span className="error">{errors?.firstName?.message}</span>
              )}
            </div>
            <div className="input__block">
              <input
                type="text"
                placeholder={t(`form.3`)}
                className="input"
                {...register("Email", {
                  required: `${t(`form.6`)}`,
                    pattern:  {
                      value :  /^\S+@\S+$/i,
                    message: `${t(`form.7`)}`,
                }
                 
                })}
              />
              {errors?.Email && (
                <span className="error">{errors?.Email?.message}</span>
              )}
            </div>
          </div>
          <div className="from__two">
            <textarea
              type="text"
              rows="10"
              className="input"
              placeholder={t(`form.4`)}
              {...register("message", {
                required: `${t(`form.6`)}`,
                minLength: {
                  value: 10,
                  message: `${t(`form.8`)}`,
                },
              })}
            ></textarea>
            {errors?.message && (
              <span className="error">{errors?.message?.message}</span>
            )}
          </div>
          <button type="submit">{t(`form.5`)}</button>
        </form>
      </div>
    </div>
  );
};

export default GetTouch;
