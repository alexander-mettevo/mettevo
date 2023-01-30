import gsap from "gsap";
import showSliders from "@/components/pages/homePage/items/partners/animationScript/scripts/showSliders";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";

const partnersSliderAnimationScript = (firstSlider, secondSlider) => {
  // Register Plugins ==================
  gsap.registerPlugin(ScrollTrigger);
  // ===================================
  // Timelines =========================
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: firstSlider.current,
      // start: "top 80%",
      // end: "bottom 20%",
      // scrub: 2,
      markers: false
    },
  });
  // ===================================
  // Scripts ===========================
  showSliders(tl, firstSlider, secondSlider)
  // ==================================
}

export default partnersSliderAnimationScript