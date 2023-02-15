import React, {useEffect, useState} from 'react';
import Link from "next/link";
import style from './contacts.module.scss'

const ContactsItem = ({item}) => {
  const [href, setHref] = useState('');

  useEffect(() => {
    switch (item.type) {
      case 'phone':
        setHref(`tel:${item.text}`);
        break;
      case 'mail':
        setHref(`mailto:${item.text}`);
        break;
      case 'address':
        setHref(`https://www.google.com/maps/search/?api=1&query=${item.text}`);
    }
  }, [])

  return (
    <Link target={'_blank'} href={href} className={style['contacts__link']}>
      <div className={`${style['contacts__title']} text_2`}>{item.title}</div>
      <div className={`${style['contacts__text']} title_2`}>{item.text}</div>
    </Link>
  );
};

export default ContactsItem;