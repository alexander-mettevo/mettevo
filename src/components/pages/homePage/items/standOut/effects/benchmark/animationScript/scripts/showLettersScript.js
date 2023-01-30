const showLettersScript = (lettersTl, lettersRef) => {

  lettersTl.from([...lettersRef.current.childNodes], {
    duration: 2,
   scale: 0,
    transformOrigin: 'bottom',
    ease: 'bounce',
    stagger: {
      amount: 0.5,

    }
  })
}

export default showLettersScript