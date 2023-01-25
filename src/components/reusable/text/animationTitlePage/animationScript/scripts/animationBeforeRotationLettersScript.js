const animationBeforeRotationLettersScript = (mm, wrapperTL, textRef, titlePageContentRef, titlePageWrapperRef) => {
  mm.add({
    isDesktop: `(min-width: 1440px)`,
    isSmallDesktop: "(max-width: 1439px)",
    isTablet: "(max-width: 767px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    let {isSmallDesktop, isTablet} = context.conditions;

    const mediaWrapperProps = {
      scale: 1.1,
    }

    if (isTablet) {
      mediaWrapperProps.scale = 1.05
    } else if (isSmallDesktop) {
      mediaWrapperProps.scale = 1.03
    }

    // titlePageWrapperRef.current.style.transform = `scale(${mediaWrapperProps.scale})`
    wrapperTL.to(titlePageWrapperRef.current, {
      scale: mediaWrapperProps.scale,
      yPercent: 30,
    })
  })
}

export default animationBeforeRotationLettersScript