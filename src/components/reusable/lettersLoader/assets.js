export const timelineProps = {repeat: 0, defaults: { stagger: 0 } }

export const checkLetter = (currentLetter, prevLetter) => {
  if (!prevLetter) return false
  return currentLetter.innerHTML === prevLetter.innerHTML
}

export const moveItem = (tl, items, nextWord, prevWord) => {
  const itemsState = []

  const callbackFrom = (index, target) => {
    if (checkLetter(target, prevWord[index])) {
      return 0
    }
    return index % 2 !== 0 ? -50 : 50

  }

  const callbackTo = (index, target) => {
    const issetNextWord = nextWord.length > 0

    if ((issetNextWord && checkLetter(target, nextWord[index])) || !issetNextWord) {
      return 0
    } else{
      return index % 2 !== 0 ? 50 : -50
    }
  }

  const callbackOpacity = (index, target, targets) => {
    if (checkLetter(target, prevWord[index]) ) {
      return 0
    }
    return 1
  }

  const callbackOpacityTo = (index, target, targets) => {
    if(checkLetter(target, nextWord[index])) {
      itemsState.push(target)
    }

    if (nextWord.length < 1 || checkLetter(target, nextWord[index])) {
      return 1
    }
    return 0
  }

  function removeItemOnStart () {
    itemsState.forEach((item) => item.style.display = 'none')
    console.log(itemsState)
  }

  tl.from(items, {
    duration: 0.2,
    y: callbackFrom,
    onComplete: removeItemOnStart,
    ease: "expo.out",
    opacity: callbackOpacity
  }, );

  tl.to(items, {
    duration: 0.2,
    y: callbackTo,
    opacity: callbackOpacityTo,
    ease: "expo.in",

  });
}