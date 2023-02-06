import React from 'react';

const ServiceText = ({info}) => {
  return (
    <div className={`text-services services-info__text ${!!info?.list && 'services-info__text_list'}`}>
      <div className={'item-text text-services__top'}>
        {info.text}
      </div>
      {!!info.list && (
      <div className={'simple-block'}>
          <ul>
            {info.list.map((item, index) => (
                <li key={index}>
                  <div className={'simple-block__title'}>{item.title}</div>
                  <div className={'simple-block__text'}>{item.text}</div>
                </li>
            ))}
          </ul>
      </div>
      )}
    </div>
  );
};

export default ServiceText;