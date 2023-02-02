import {CircleAnimation} from "@/components/reusable/animations/listEffects";
import gsap from "gsap";

export const showLineAnimation = (ref, tl, linePosition) => {
  tl.fromTo(ref.current.querySelectorAll('.animation-line'), {
    scale: 0,
    transformOrigin: linePosition,
  }, {
    scale: 1,
    duration: 1.5,
    ease: "power4.out"
  })
  tl.fromTo(ref.current.querySelectorAll('.animation-figure'), {
    scale: 0,
    transformOrigin: "center",
  }, {
    scale: 1,
    duration: 2,
    ease: "power4.out"
  }, "-=75%")
}

export const showLineAnimationWithCircle = (ref, tl, linePosition) => {
  showLineAnimation(ref, tl, linePosition)
  tl.fromTo(ref.current.querySelectorAll('.animation-circle'), ...CircleAnimation, "-=300%")
  return tl
}

export const showLineAnimationWithCircleOnHover = (ref, position ='') => {
    const tl = gsap.timeline({paused: true})
    const elements = [
      ...ref.current.querySelectorAll('.animation-line'),
      ...ref.current.querySelectorAll('.animation-figure')
    ]
  const circle = ref.current.querySelector('.animation-circle')

    gsap.set([elements, circle], {
      scale: 0,
    })
    tl.to(elements, {
      scale: 1,
      duration: 1,
      transformOrigin: position,
      ease: "power4.out"
    })
    tl.to(circle,{
      scale: 1,
    })

    return tl
}