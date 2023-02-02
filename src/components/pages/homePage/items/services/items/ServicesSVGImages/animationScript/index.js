import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const servicesAnimationScript = (ref) => {
  // Register Plugins ==================
  gsap.registerPlugin(ScrollTrigger);
  // ===================================
  // Timelines =========================
  return gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,

    },
    delay: .5,
  })
  // ===================================
}

export default servicesAnimationScript