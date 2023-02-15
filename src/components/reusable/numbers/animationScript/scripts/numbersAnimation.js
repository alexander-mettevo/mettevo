const numbersAnimation = (tl, num, ref) => {
  const initObj = {
    value: 0
  }

  const span = ref.current.querySelector('.int')

  tl.to(initObj, {
    value: num,
    duration: 3,
    ease: 'power4.out',
    onUpdate: () => {
      span.innerHTML = Math.floor(initObj.value)
    }
  })
}

export default numbersAnimation