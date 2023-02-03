export const showSliders = (tl, firstSlider, secondSlider) => {

  tl.fromTo(firstSlider.current, {
    duration: 2,
    xPercent: 100,
  }, {
    xPercent: 0,
    ease: 'power2.out',
  })

  tl.fromTo(secondSlider.current, {
    duration: 2,
    xPercent: -100,
  }, {
    xPercent: 0,
    ease: 'power2.out',
  }, '-=0.5')
}

export default showSliders