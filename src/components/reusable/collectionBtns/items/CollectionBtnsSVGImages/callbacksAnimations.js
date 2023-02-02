import gsap from "gsap";
import {showLineAnimation, showLineAnimationWithCircle} from "@/components/reusable/animations/showLineAnimation";

export const callbackAnimation = (ref, position) => {
  const tl = gsap.timeline({
    paused: true,
    delay: .5,
  })
  showLineAnimationWithCircle(ref, tl, position)

  return tl
}

export const callbackAnimationLine = (ref, position) => {
  const tl = gsap.timeline({
    paused: true,
    delay: .5,
  })
  showLineAnimation(ref, tl, position)
  return tl
}