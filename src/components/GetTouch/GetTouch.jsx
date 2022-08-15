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
        <h1 className="getTouch__title">We would love to know you</h1>
        <p className="getTouch__descr">GET IN TOUCH WITH US</p>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="from__one">
            <div className="input__block">
              <input
                type="text"
                placeholder="Имя"
                className="input"
                {...register("firstName", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 4,
                    message: "Минимум 4 символов",
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
                placeholder="Почта"
                className="input"
                {...register("Email", {
                    required: "Поле обязательно к заполнению",
                    pattern:  {
                      value :  /^\S+@\S+$/i,
                    message: "Введите коректно почту",
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
              placeholder="Сообщения"
              {...register("message", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            ></textarea>
            {errors?.message && (
              <span className="error">{errors?.message?.message}</span>
            )}
          </div>
          <button type="submit">Далее</button>
        </form>
      </div>
    </div>
  );
};

export default GetTouch;
