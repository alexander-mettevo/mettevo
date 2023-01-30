import gsap from "gsap";
import showItem from "@/components/reusable/animations/showFromBottom/scripts/showItem";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const showFromBottom = (ref) => {
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
  showItem(tl, ref);
  // ==================================
}

export default showFromBottom;