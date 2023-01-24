import gsap from "gsap";

const rotationLettersInHeaderScript = (textRef) => {

  const letterColumns = [...textRef.current.childNodes]

  letterColumns.forEach((letters) => {
    const filteredArr = [...letters.childNodes].filter((item, index, arr) => {
      return item.innerHTML !== arr[index + 1]?.innerHTML;
    })

    letters.innerHTML = ''
    filteredArr.forEach((letter) => {
      letters.appendChild(letter)
    })
  })

  letterColumns.forEach((item, index, arr) => {
    let tl = gsap.timeline();
    const isEveryTwo = index % 2 === 0
    const letters = [...item.childNodes]
    const yPercentFrom = isEveryTwo ? 0 : (-100 * (letters.length - 1))
    const yPercentTo = isEveryTwo ? (-100 * (letters.length - 1)) : 0

    const hideLetter = (index, target, targets) => {
      if (isEveryTwo && index < (targets.length - 1)) return 0

      if (!isEveryTwo && index > 0) return 0

      return 1
    }

    tl.from(letters, {yPercent: yPercentFrom});
    tl.to(letters, {duration: letters.length / 2.5, yPercent: yPercentTo})
    tl.to(letters, {opacity: hideLetter}, ">-15%")
  })
}

export default rotationLettersInHeaderScript