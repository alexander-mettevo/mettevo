const showBlockTitle = (tl, ref) => {
  tl
    .fromTo(ref.current, {
      autoAlpha: 0,
      y: 100
    }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5
    })
}

export default showBlockTitle