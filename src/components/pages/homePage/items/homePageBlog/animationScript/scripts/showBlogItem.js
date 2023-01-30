const showItemScript = (ref, tl, mm) => {
  mm.add({
    isDesktop: `(min-width: 1440px)`,
    isSmallDesktop: "(max-width: 1439px)",
    isTablet: "(max-width: 768px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    let {isSmallDesktop, isTablet} = context.conditions;

    if (isTablet) {
      tl.from([...ref.current.childNodes], {
        xPercent: -50,
        opacity: 0,
        duration: 0.5,
        delay: (index) => index * 0.1,
      })
    } else {
      tl.from([...ref.current.childNodes], {
        yPercent: 50,
        opacity: 0,
        duration: 0.5,
        delay: (index) => index * 0.1,
      })
    }

  })
}

export default showItemScript