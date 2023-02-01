import {CircleAnimation} from "@/components/reusable/animations/listEffects";

const computerAnimation = (tl) => {
  tl.fromTo('.computer-line', {
    scale: 0.2,
    transformOrigin: "bottom left",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  })
  tl.fromTo('.computer-figure', {
    scale: 0.2,
    transformOrigin: "center",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  }, "-=100%")
  tl.fromTo('.computer-circle',  ...CircleAnimation, "-=300%")
}

export default computerAnimation