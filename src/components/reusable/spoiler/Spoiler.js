import React from 'react';

const Spoiler = ({list}) => {
  return (
    <div className={'spollers'}>
      {list.length > 0 && list.map((item, index) => (
        <div key={index + 'spoiler'} className={'spollers__item _spoller-init ' }>
          <div className={'spollers__title'}>
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