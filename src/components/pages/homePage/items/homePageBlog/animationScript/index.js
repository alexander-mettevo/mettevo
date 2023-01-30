import gsap from "gsap";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";
import showItemScript from "@/components/pages/homePage/items/homePageBlog/animationScript/scripts/showBlogItem";

const homePageBlogAnimationScript = (ref) => {
  // Register Plugins ==================
  gsap.registerPlugin(ScrollTrigger);
  // ===================================
  // MediaQuery ========================
  const mm = gsap.matchMedia()
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
  showItemScript(ref, tl, mm)
  // ==================================
}

export default homePageBlogAnimationScript