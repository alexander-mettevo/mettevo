import {CircleAnimation} from "@/components/reusable/animations/listEffects";

const speakerAnimation = (tl) => {
  tl.fromTo('.speaker-line', {
    scale: 0.2,
    transformOrigin: "bottom left",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  })
  tl.fromTo('.speaker-figure', {
    scale: 0.2,
    transformOrigin: "center",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  }, "-=100%")
  tl.fromTo('.speaker-circle', ...CircleAnimation, "-=300%")

}

export default speakerAnimation