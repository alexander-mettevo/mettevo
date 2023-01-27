import React from 'react';
import {
  ExperienceBackground, ExperienceContainer, ExperienceWord,
  ExperienceWrapper
} from "@/components/pages/homePage/items/standOut/effects/experience/styles";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <ExperienceWord>SEO ExpertS</ExperienceWord>
      <ExperienceWord>Web-developers</ExperienceWord>
      <ExperienceWord>Designers</ExperienceWord>
      <ExperienceWord>Project managers</ExperienceWord>
      <ExperienceWord>CopywriterS</ExperienceWord>
      <ExperienceWord>Proofreaders</ExperienceWord>
      <ExperienceBackground>
        <div>METTEVO</div>
        <div>TEAM</div>
      </ExperienceBackground>
    </ExperienceWrapper>
  );
};

export default Experience;