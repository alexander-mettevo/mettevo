import React from 'react';
import ServiceForm from "@/components/pages/services/items/serviseInfo/items/serviceForm/ServiceForm";
import ServiceText from "@/components/pages/services/items/serviseInfo/items/serviceText/ServiceText";
import style from './services-info.module.scss'

const ServiceInfo = ({title, info}) => {
  return (
    <div className={style['services-info']}>
      <ServiceText info={info}/>
      <ServiceForm/>
    </div>
  );
};

export default ServiceInfo;