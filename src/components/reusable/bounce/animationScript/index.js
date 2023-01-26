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
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      markers: false
    },
  });
  // ===================================
  // Scripts ===========================
  tl.from(ref.current, {
    scale: 0,
    ease: "bounce.out",
  } )
  tl.to(ref.current, {
    scale: 1,
    duration: 1,
    ease: "bounce.out",
  })

  // ==================================
}

export default bounceAnimationScript;