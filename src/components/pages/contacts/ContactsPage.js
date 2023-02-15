import React from 'react';
import PageHeader from "@/components/pages/services/items/pageHeader/PageHeader";
import ContactsData from "@/components/pages/contacts/ContactsData";

const ContactsPage = ({data}) => {
  return (
    <>
      <PageHeader title={data.title}/>
      <ContactsData data={data.data}/>
    </>
  );
};

export default ContactsPage;