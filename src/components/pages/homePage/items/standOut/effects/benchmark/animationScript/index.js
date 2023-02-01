import gsap from "gsap";
import {ScrollTrigger}  from "gsap/dist/ScrollTrigger";
import showLettersScript
  from "@/components/pages/homePage/items/standOut/effects/benchmark/animationScript/scripts/showLettersScript";
import showLineScript
  from "@/components/pages/homePage/items/standOut/effects/benchmark/animationScript/scripts/showLineScript";

const showBenchmarkAnimationScript = (lettersRef, lineRef) => {
  // Register Plugins ==================
  gsap.registerPlugin(ScrollTrigger);
  // ===================================
  // MediaQuery ========================
  const mm = gsap.matchMedia()
  // ===================================
  // Timelines =========================
  const lettersTl = gsap.timeline({
    scrollTrigger: {
      trigger: lettersRef.current,
      markers: false
    },
  });

  const lineTl = gsap.timeline({
    scrollTrigger: {
      trigger: lineRef.current,
      markers: false
    },
  } );
  // ===================================

  // Scripts ===========================
  showLettersScript(lettersTl, lettersRef)
  showLineScript(lineTl, lineRef, mm)
  // ==================================
}

export default showBenchmarkAnimationScript