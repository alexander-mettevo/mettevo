import React, {useEffect, useState} from 'react';

const ServiceForm = ({title}) => {
  const [labelText, setLabelText] = useState(title);

  useEffect(() => {
    setLabelText(title.replace(/Services/i, 'services'));
  }, [])

  return (
    <form className={'services-info__form form-services form'}>
      <div className={'form-services__block form-services__items-wrap'}>
        Hello, Mettevo!
      </div>
      <div  className={'form-services__items-wrap'}>
        <label className='input__label form-services__label'>My name is <input className={'form-services__input input'} type='text' placeholder='YOUR NAME'/></label>
      </div>
      <div  className={'form-services__items-wrap'}>
        <label className='input__label form-services__label'>from <input className={'form-services__input input'} type='text' placeholder='COMPANY NAME'/></label>
      </div>
      <div  className={'form-services__items-wrap form-services__items-wrap_s'}>
        <label className='input__label form-services__label form-services__label_w' htmlFor={'service-input'}>I want to get free {labelText} quote of my website</label>
      </div>
      <div  className={'form-services__items-wrap'}>
        <input id={'service-input'} className={'form-services__input input'} type='text' placeholder='website'/>
      </div>
      <div  className={'form-services__items-wrap'}>
        <label className='input__label form-services__label form-services__label_fw'>
          <span>Contact me back at </span>
          <input className={'form-services__input input'} type='email' placeholder='YOUR EMAIL'/>
        </label>
      </div>
      <div  className={'form-services__items-wrap'}>
        <label className='input__label form-services__label'>or <input className={'form-services__input input'} type='text' placeholder='YOUR PHONE'/></label>
      </div>
      <button className={'button form-services__button'}>Get a free <span>{title}</span> quote</button>
    </form>
  );
};

export default ServiceForm;