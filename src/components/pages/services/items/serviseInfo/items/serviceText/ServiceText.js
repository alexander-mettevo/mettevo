import React from "react";
import style from "../../services-info.module.scss";

const ServiceText = ({ info }) => {
const { title, text, list } = info;

  return (
    <div
      className={`${style["text-services"]} ${style["services-info__text"]} ${
        !!list && style["services-info__text_list"]
      }`}
    >
          <div className={style["text-services__top"]}>
            {!!title && <div className={style["text-services__title"]}>{title}</div>}
            {!!text && <p className={`item-text`}>{text}</p>}
          </div>

      {!!list && (
        <div className={"simple-block"}>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <div className={"simple-block__title"}>{item.title}</div>
                <div className={"simple-block__text"}>{item.text}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceText;
