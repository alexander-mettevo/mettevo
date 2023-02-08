import React from 'react';

const Spoiler = ({list}) => {
  return (
    <div className={'spollers'}>
      {list.length > 0 && list.map((item, index) => (
        <div key={index + 'spoiler'} className={'spollers__item'}>
          <div className={'spollers__title _spoller-init'}>
            {item.title}
          </div>
          <div className={'spollers__body'}>
            {item.text}
          </div>
        </div>
        ))}
    </div>
  );
};

export default Spoiler;