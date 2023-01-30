import gsap from "gsap";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";
import numbersAnimation from "@/components/pages/homePage/items/numbers/animationScript/scripts/numbersAnimation";

const numbersAnimationScript = (ref, num) => {
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
  numbersAnimation(tl, num, ref)
  // ==================================
}

export default numbersAnimationScript