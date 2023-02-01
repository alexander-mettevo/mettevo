import {showLineAnimation} from "@/components/reusable/animations/showLineAnimation";

const rocketAnimation = (ref, tl) => {
  showLineAnimation(ref, tl, "top right")

  tl.fromTo(ref.current.querySelectorAll('.rocket-cloud'), {
    yPercent: -100,
    xPercent: 100,
    transformOrigin: "top right",
  }, {
    yPercent: 0,
    xPercent: 0,
    repeat: 0,
    duration:3,
    ease: "power4.out"
  }, "-=50%")
}

export default rocketAnimation