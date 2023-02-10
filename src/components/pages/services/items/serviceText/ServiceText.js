import React, {useEffect, useState} from 'react';
import Bounce from "@/components/reusable/bounce/Bounce";
import style from './service-text.module.scss'

const ServiceText = ({data}) => {
  const [isFirstBounce, setIsFirstBounce] = useState(false);

  useEffect(() => {
    if (data[0][0].component === 'bounce') {
      setIsFirstBounce(true)
    }
  }, [])

  return (
    <div className={'block-wrapper'}>
      {
        data.map((row, index, arr) => (
          <div key={index + 'serviceTextRow'} className={`${style['service-text__row']}
           ${index === arr.length - 1  && isFirstBounce && style['service-text__row_r']}`
          }>
            {row.map((item, index) => (
              <>
                {item.component === 'text' && (
                  <div key={index + 'service-text'} className={style['service-text__info']}>
                    <div className={`block-title ${style['service-text__title']}`}>
                      {item.content.title}
                    </div>
                    <p className={'item-text '}>
                      {item.content.text}
                    </p>
                  </div>
                  )}
                {item.component === 'bounce' && (
                  <div key={index + 'service-text'}  className={style['service-text__bounce']}>
                    <Bounce color={'#101010'} size={'140px'} mobileSize={'80px'} left={'40%'} top={'50%'}>
                      {item.content.text}
                    </Bounce>
                  </div>
                  )}
              </>
            ))}

          </div>
        ))
      }
    </div>
  );
};

export default ServiceText;
