import React from 'react';
import {BounceGraphicsCircleWrapper} from "@/components/pages/homePage/items/standOut/effects/bounce-graphics/styles";
import Bounce from "@/components/reusable/bounce/Bounce";

const BounceGraphicsCircleContainer = () => {
  return (
    <BounceGraphicsCircleWrapper>
      <Bounce size={'130px'} color={'#101010'} top={'calc(100% - 140px)'} left={'78px'}>integration </Bounce>
      <Bounce size={'170px'} color={'#EBEBEB'} top={'10%'} left={'152px'}>finish of the project </Bounce>
      <Bounce size={'210px'} color={'#101010'} top={'0'} left={'calc(100% - 210px)'}>continue working on the project </Bounce>
      <Bounce size={'120px'} color={'#EBEBEB'} top={'65%'} left={'calc(100% - 190px)'}>support </Bounce>
      <Bounce size={'49px'} color={'#DDDDDD'} top={'40%'} left={'96px'}/>
      <Bounce size={'37px'} color={'#DDDDDD'} top={'10%'} left={'322px'}/>
      <Bounce size={'78px'} color={'#DDDDDD'} top={'60%'} left={'233px'}/>
      <Bounce size={'66px'} color={'#DDDDDD'} top={'50%'} left={'326px'}/>
      <Bounce size={'44px'} color={'#DDDDDD'} top={'75%'} left={'326px'}/>
      <Bounce size={'61px'} color={'#DDDDDD'} top={'65%'} left={'90%'}/>
    </BounceGraphicsCircleWrapper>
  );
};

export default BounceGraphicsCircleContainer;