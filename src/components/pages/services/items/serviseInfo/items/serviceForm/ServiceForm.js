import React, {useEffect, useState} from 'react';
import style from '../../services-info.module.scss'

const ServiceForm = ({title}) => {
  const [labelText, setLabelText] = useState(title);

  useEffect(() => {
    setLabelText(title.replace(/Services/i, 'services'));
  }, [])

  return (
    <form className={`${style['services-info__form']} ${style['form-services']} form`}>
      <div className={`${style['form-services__block']} ${style['form-services__items-wrap']}`}>
        Hello, Mettevo!
      </div>
      <div className={style['form-services__items-wrap']}>
        <label className={`input__label ${style['form-services__label']}`}>My name is <input
          className={`${style['form-services__input']} input`} type='text' placeholder='YOUR NAME'/></label>
      </div>
      <div className={style['form-services__items-wrap']}>
        <label className={`input__label ${style['form-services__label']}`}>from <input
          className={`${style['form-services__input']} input`} type='text' placeholder='COMPANY NAME'/></label>
      </div>
      <div className={`${style['form-services__items-wrap']} ${style['form-services__items-wrap_s']}`}>
        <label className={`input__label ${style['form-services__label']} ${style['form-services__label_w']}`}
               htmlFor={'service-input'}>I want to get free {labelText} quote of my website</label>
      </div>
      <div className={style['form-services__items-wrap']}>
        <input id={'service-input'} className={`${style['form-services__input']} input`} type='text'
               placeholder='website'/>
      </div>
      <div className={style['form-services__items-wrap']}>
        <label className={`input__label ${style['form-services__label']} ${style['form-services__label_fw']}`}>
          <span>Contact me back at </span>
          <input className={`${style['form-services__input']} input`} type='email' placeholder='YOUR EMAIL'/>
        </label>
      </div>
      <div className={style['form-services__items-wrap']}>
        <label className={`input__label ${style['form-services__label']}`}>or <input
          className={`${style['form-services__input']} input`} type='text' placeholder='YOUR PHONE'/></label>
      </div>
      <button className={`button ${style['form-services__button']}`}>Get a free <span>{title}</span> quote</button>
    </form>
  );
};

export default ServiceForm;