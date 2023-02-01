import {CircleAnimation} from "@/components/reusable/animations/listEffects";

export const showLineAnimation = (ref, tl, linePosition) => {
  tl.fromTo(ref.current.querySelectorAll('.animation-line'), {
    scale: 0,
    transformOrigin: linePosition,
  }, {
    scale: 1,
    duration: 3,
    ease: "power4.out"
  })
  tl.fromTo(ref.current.querySelectorAll('.animation-figure'), {
    scale: 0,
    transformOrigin: "center",
  }, {
    scale: 1,
    duration: 2.5,
    ease: "power4.out"
  }, "-=75%")
}

export const showLineAnimationWithCircle = (ref, tl, linePosition) => {
  showLineAnimation(ref, tl, linePosition)
  tl.fromTo(ref.current.querySelectorAll('.animation-circle'), ...CircleAnimation, "-=300%")
}