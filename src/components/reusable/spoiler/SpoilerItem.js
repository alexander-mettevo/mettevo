import React, {useState} from 'react';

const SpoilerItem = ({item}) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <div  className={`spollers__item _spoller-init `}>
      <div onClick={toggleActive} className={`spollers__title ${active && '_spoller-active'}`}>
        {item.title}
      </div>
      {
        active && (
          <div className={`spollers__body text_1`}>
            {item.text}
          </div>
        )
      }
    </div>
  );
};

export default SpoilerItem;