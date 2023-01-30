const numbersAnimation = (tl, num, ref) => {
  const initObj = {
    value: 0
  }
  console.log('numbersAnimation', num)
  tl.to(initObj, {
    value: num,
    duration: 3,
    ease: 'power4.out',
    onUpdate: () => {
      ref.current.innerHTML = Math.floor(initObj.value)
    }
  })
}

export default numbersAnimation