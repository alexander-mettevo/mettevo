import React, {useRef} from 'react';
import experienceAnimationScript from "@/components/pages/homePage/items/standOut/effects/experience/animationScript";
import style from './experience.module.scss';
import mainStyle from '../../stand-out.module.scss';
const Experience = () => {
  const wordsRef = useRef(null)
  const handleMouseMove = (e) => experienceAnimationScript(e, wordsRef)

  return (
    <div className={`${style['experience']} ${mainStyle['stand-out__effect']}`} onMouseMove={handleMouseMove}>
      <div ref={wordsRef}>
        <span className={style['experience__word']}>SEO ExpertS</span>
        <span className={style['experience__word']}>Web-developers</span>
        <span className={style['experience__word']}>Designers</span>
        <span className={style['experience__word']}>Project managers</span>
        <span className={style['experience__word']}>CopywriterS</span>
        <span className={style['experience__word']}>Proofreaders</span>
      </div>
      <div className={style['experience__background']}>
        <svg width="100%" height="100%" viewBox="0 0 605 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.4762 265.879H83.6433V153.329H125.621V118.043H1.71475V153.329H42.4762V265.879ZM141.227 265.879H253.372V230.999H182.394V207.475H242.624V174.825H182.394V152.924H252.763V118.043H141.227V265.879ZM262.09 265.879H304.88L312.586 239.516H362.27L369.976 265.879H412.766L366.732 118.043H308.124L262.09 265.879ZM321.711 208.286L330.432 178.475L336.718 154.951H338.138L344.424 178.475L353.144 208.286H321.711ZM426.405 265.879H466.558V218.629L465.95 160.832H467.775L493.124 265.879H524.76L550.109 160.832H551.529L551.123 218.223V265.879H590.871V118.043H528.816L509.753 198.349H508.131L488.46 118.043H426.405V265.879Z" fill="#b2b2b2"/>
          <path d="M12.3266 94H35.6343V66.5723L35.2812 33.0233H36.3406L51.0551 94H69.4187L84.1332 33.0233H84.9572L84.7218 66.3368V94H107.794V8.18529H71.773L60.7078 54.8007H59.766L48.3476 8.18529H12.3266V94ZM124.065 94H189.161V73.7529H147.961V60.0979H182.922V41.1457H147.961V28.4324H188.808V8.18529H124.065V94ZM218.6 94H242.497V28.6678H266.864V8.18529H194.939V28.6678H218.6V94ZM295.966 94H319.862V28.6678H344.23V8.18529H272.305V28.6678H295.966V94ZM353.288 94H418.385V73.7529H377.184V60.0979H412.146V41.1457H377.184V28.4324H418.032V8.18529H353.288V94ZM450.8 94H482.936L511.424 8.18529H484.702L471.871 54.4475L467.28 71.2809H466.338L461.63 54.3298L448.917 8.18529H422.195L450.8 94ZM556.993 95.1772C583.362 95.1772 600.901 79.6387 600.901 51.0338C600.901 22.5466 583.362 7.00813 556.993 7.00813C530.743 7.00813 513.203 22.5466 513.203 51.0338C513.203 79.6387 530.743 95.1772 556.993 95.1772ZM556.993 74.9301C545.457 74.9301 537.688 68.1026 537.688 51.0338C537.688 34.0827 545.457 27.2552 556.993 27.2552C568.647 27.2552 576.416 34.2004 576.416 51.0338C576.416 67.9848 568.647 74.9301 556.993 74.9301Z" fill="#b2b2b2"/>
        </svg>
      </div>
    </div>
  );
};

export default Experience;