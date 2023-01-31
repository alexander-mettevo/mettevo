const showLineScript = (lineTl, lineRef, mm) => {

  mm.add("(min-width: 1200px)", () => {
    lineTl.set(lineRef.current, {
      transformOrigin: 'left',
      rotate: -10,
      y: 60,
    })
  });

  mm.add("(max-width: 1199px)", () => {
    lineTl.set(lineRef.current, {
      transformOrigin: 'left',
      rotate: -10,
      y: 100,
    })
  });


  lineTl
    .fromTo(lineRef.current, {
      scaleX: 0,
    }, {
      duration: 2,
      scaleX: 1,
      ease: 'bounce',
    })


}

export default showLineScript