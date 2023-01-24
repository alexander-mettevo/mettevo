const animationBeforeRotationLettersScript = (mm, wrapperTL, textRef, titlePageContentRef, titlePageWrapperRef) => {
  mm.add({
    isDesktop: `(min-width: 1440px)`,
    isSmallDesktop: "(max-width: 1439px)",
    isTablet: "(max-width: 767px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    let {isDesktop, isSmallDesktop, isTablet} = context.conditions;

    const mediaWrapperProps = {
      scale: 1.5,
      height: '225px'
    }

    if (isTablet) {
      mediaWrapperProps.height = '4.6rem'
      mediaWrapperProps.scale = 1.05
    } else if (isSmallDesktop) {
      mediaWrapperProps.scale = 1.05
      mediaWrapperProps.height = '13vw'
    }

    wrapperTL.from(textRef.current, {
      scale: mediaWrapperProps.scale,
      height: mediaWrapperProps.height
    })
    wrapperTL.from(titlePageWrapperRef.current, {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: '50%',
      margin: '0 auto',
      left: '0',
      right: '0'
    })
  })
}

export default animationBeforeRotationLettersScript