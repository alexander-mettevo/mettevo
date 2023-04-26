import React from 'react'
import style from '../service-text.module.scss'

export const ServiceTextCircle = ({text}) => {
  return (
    <div className={style["service-text__bounce"]}>
    <Bounce
      color={"#101010"}
      size={"140px"}
      mobileSize={"80px"}
      left={"40%"}
      top={"50%"}
    >
      {text}
    </Bounce>
  </div>
  )
}
