const rocketAnimation = (ref, tl) => {
  tl.fromTo('.rocket-fire', {
    scale: 0.2,
    transformOrigin: "top right",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  })
  tl.fromTo('.rocket-figure', {
    scale: 0.2,
    transformOrigin: "center",
  }, {
    scale: 1,
    repeat: 3,
    ease: "power4.out"
  }, "-=100%")

  tl.fromTo('.rocket-cloud', {
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