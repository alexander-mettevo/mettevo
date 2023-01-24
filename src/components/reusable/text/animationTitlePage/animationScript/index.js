import gsap from "gsap";
import rotationLettersInHeaderScript
  from "@/components/reusable/text/animationTitlePage/animationScript/scripts/rotationLettersInHeaderScript";
import animationBeforeRotationLettersScript
  from "@/components/reusable/text/animationTitlePage/animationScript/scripts/animationBeforeRotationLettersScript";
import animationAfterRotationLettersScript
  from "@/components/reusable/text/animationTitlePage/animationScript/scripts/animationAfterRotationLettersScript";

const titlePageAnimationScript = (
  rowLetters,
  titlePageWrapperRef,
  titlePageContentRef,
  textRef
) => {
  // Timelines =========================
  const wrapperTL = gsap.timeline();
  // const textTl = gsap.timeline();

  // ===================================
  // MediaQuery ========================
  const mm = gsap.matchMedia()
  // ===================================
  // Scripts ===========================
  animationBeforeRotationLettersScript(mm, wrapperTL, textRef, titlePageContentRef, titlePageWrapperRef)
  rotationLettersInHeaderScript(textRef)
  animationAfterRotationLettersScript(mm, wrapperTL, textRef, titlePageContentRef, titlePageWrapperRef)
  // ==================================
}

export default titlePageAnimationScript