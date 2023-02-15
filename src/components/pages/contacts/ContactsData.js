import React from 'react';
import ContactsItem from "@/components/pages/contacts/ContactsItem";
import style from './contacts.module.scss'

const ContactsData = ({data}) => {
  return (
    <div className={style['contacts__row']}>
      {data?.length > 0 && data.map((item, index) => <ContactsItem item={item} key={index + 'contact'}/>)}
    </div>
  );
};

export default ContactsData;