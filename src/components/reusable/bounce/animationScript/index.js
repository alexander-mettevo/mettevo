import gsap from "gsap";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";
const bounceAnimationScript = (ref) => {
  // Register Plugins ==================
  gsap.registerPlugin(ScrollTrigger);
  // ===================================
  // Timelines =========================
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      markers: false
    },
  });
  // ===================================
  // Scripts ===========================
  tl.fromTo(ref.current, {
    opacity: 0,
    scale: 0,
    ease: 'bounce',
  }, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'bounce',
  })
  // ==================================
}

export default bounceAnimationScript;