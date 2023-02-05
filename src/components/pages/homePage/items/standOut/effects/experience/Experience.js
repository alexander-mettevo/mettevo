import React, {useRef} from 'react';
import experienceAnimationScript from "@/components/pages/homePage/items/standOut/effects/experience/animationScript";

const Experience = () => {
  const wordsRef = useRef(null)
  const handleMouseMove = (e) => experienceAnimationScript(e, wordsRef)

  return (
    <div className={'experience stand-out__effect'} onMouseMove={handleMouseMove}>
      <div ref={wordsRef}>
        <span className={'experience__word'}>SEO ExpertS</span>
        <span className={'experience__word'}>Web-developers</span>
        <span className={'experience__word'}>Designers</span>
        <span className={'experience__word'}>Project managers</span>
        <span className={'experience__word'}>CopywriterS</span>
        <span className={'experience__word'}>Proofreaders</span>
      </div>
      <div className={'experience__background'}>
        <div>METTEVO</div>
        <div>TEAM</div>
      </div>
    </div>
  );
};

export default Experience;