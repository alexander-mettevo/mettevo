const animationAfterRotationLettersScript = (
  mm,
  wrapperTL,
  textRef,
  titlePageContentRef,
  titlePageWrapperRef
) => {
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
  }, "-=0.5")

  wrapperTL.to(titlePageWrapperRef.current, {
    duration: 1,
    scale: 1,
    yPercent: 0,
  })

  wrapperTL.to('body', {
    overflowY: 'auto',
    overflowX: 'hidden',
    touchAction: 'auto',
    overscrollBehavior: 'auto',
  })
}

export default animationAfterRotationLettersScript