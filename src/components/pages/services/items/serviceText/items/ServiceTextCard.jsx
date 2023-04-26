import style from "../service-text.module.scss";

const ServiceTextCard = ({ value, text }) => {
  return (
    <div className={style["service-text__card"]}>
      <div>
        <div></div>
        <div className="title_2">
          <span>+</span>
          {value}
        </div>
        <div className="text_2">{text}</div>
      </div>
    </div>
  );
};

export default ServiceTextCard;
