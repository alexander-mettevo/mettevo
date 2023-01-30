

const showLineScript = (lineTl, lineRef, mm) => {
  mm.add({
    isDesktop: `(max-width: 1200px)`,
  }, (context) => {
    let {isDesktop} = context.conditions;

    lineTl
      .fromTo(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left',
        rotate: -10,
        y: !isDesktop ? 60 : 100,
      }, {
        duration: 2,
        scaleX: 1,
        rotate: -10,
        y: !isDesktop ? 60 : 90,
        ease: 'bounce',
      })
  })


}

export default showLineScript