import gsap from "gsap";
import showBlockTitle from "@/components/reusable/text/blockTitle/animationScript/scripts/showBlockTitle";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";
const blockTitleAnimationScript = (ref) => {
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
  showBlockTitle(tl, ref)
  // ==================================
}

export default blockTitleAnimationScript