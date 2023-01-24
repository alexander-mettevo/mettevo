const animationAfterRotationLettersScript = (
  mm,
  wrapperTL,
  textRef,
  titlePageContentRef,
  titlePageWrapperRef
) => {
  mm.add({
    isDesktop: `(min-width: 1440px)`,
    isSmallDesktop: "(max-width: 1439px)",
    isTablet: "(max-width: 767px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    let {isDesktop, isSmallDesktop, isTablet} = context.conditions;
    wrapperTL.to(textRef.current, {
      duration: 0.5,
      delay: 3,
    });
    wrapperTL.from(titlePageContentRef.current, {
      opacity: 0,
      duration: .5,
    }, "-=0.5")
    wrapperTL.to(titlePageContentRef.current, {
      duration: .5,
      opacity: 1,
      scale: isDesktop ? 1.5 : 1.05,
      y: isDesktop ? '100px' : '20px',
    }, "-=0.5")
    wrapperTL.to(textRef.current, {duration: 0.5, scale: 1, delay: 1});
    wrapperTL.to(titlePageContentRef.current, {
      scale: 1,
      y: 0,
    }, "-=0.5")
    wrapperTL.to(titlePageWrapperRef.current, {
      top: '100px',
      duration: 1
    }, "-=2")
    wrapperTL.to(titlePageWrapperRef.current, {
      position: 'static',
      top: '60px',
      width: '100%',
      height: '100%',
    })
  })
}

export default animationAfterRotationLettersScript