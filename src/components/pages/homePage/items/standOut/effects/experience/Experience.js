import React, {useRef} from 'react';
import {
  ExperienceBackground,
  ExperienceWord,
  ExperienceWrapper
} from "@/components/pages/homePage/items/standOut/effects/experience/styles";
import experienceAnimationScript from "@/components/pages/homePage/items/standOut/effects/experience/animationScript";

const Experience = () => {
  const wordsRef = useRef(null)
  const handleMouseMove = (e) => experienceAnimationScript(e, wordsRef)

  return (
    <ExperienceWrapper onMouseMove={handleMouseMove}>
      <div ref={wordsRef}>
        <ExperienceWord>SEO ExpertS</ExperienceWord>
        <ExperienceWord>Web-developers</ExperienceWord>
        <ExperienceWord>Designers</ExperienceWord>
        <ExperienceWord>Project managers</ExperienceWord>
        <ExperienceWord>CopywriterS</ExperienceWord>
        <ExperienceWord>Proofreaders</ExperienceWord>
      </div>
      <ExperienceBackground>
        <div>METTEVO</div>
        <div>TEAM</div>
      </ExperienceBackground>
    </ExperienceWrapper>
  );
};

export default Experience;