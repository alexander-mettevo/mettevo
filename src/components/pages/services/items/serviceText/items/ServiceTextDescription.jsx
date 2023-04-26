import style from '../service-text.module.scss'

const ServiceTextDescription = ({ title, text }) => {

  return (
    <div className={style["service-text__info"]}>
    <div className={`item-title ${style["service-text__title"]}`}>
      {title}
    </div>
    <p className={"item-text "}>{text}</p>
  </div>
  )
}

export default ServiceTextDescription