const timelineProps = {repeat: 1, defaults: {stagger: 0}}

const checkLetter = (currentLetter, prevLetter) => {
  if (!prevLetter) return false
  return currentLetter.innerHTML === prevLetter.innerHTML
}

const moveItem = (tl, items, nextWord, prevWord) => {
  const callbackFrom = (index, target) => {
    if (!checkLetter(target, nextWord[index])) {
      return index % 2 !== 0 ? -50 : 50
    }
    return 0
  }
  const callbackTo = (index, target) => {
    const issetNextWord = nextWord.length > 0

    if ((issetNextWord && checkLetter(target, nextWord[index])) || !issetNextWord) {
      return 0
    } else{
      return index % 2 !== 0 ? 50 : -50
    }
  }

  // const callbackDellay = (index, target, targets) => {
  //   return !!nextWord && checkLetter(target, nextWord[index]) ? 0 : .3
  // }

  const callbackOpacity = (index, target, targets) => {
    return !!nextWord && checkLetter(target, nextWord[index]) ? 0 : 1
  }

  const callbackOpacityTo = (index, target, targets) => {
    return index < targets.length ? 0 : 1
  }

  tl.from(items, {
    y: callbackFrom,
    ease: "expo.out",
    opacity: callbackOpacity
  }, "<0.3");

  tl.to(items, {
    y: callbackTo,
    // stagger: callbackDellay,
    opacity: callbackOpacityTo,
    ease: "expo.in"
  });
}

let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = new SplitText(word, {type: "chars"}).chars
});

let tl1 = gsap.timeline(timelineProps);
let tl2 = gsap.timeline(timelineProps);

words.forEach((word, index, arr) => {
  if (index < arr.length - 1 && index > 0) {
    moveItem(tl1, word.childNodes, arr[index + 1].childNodes, arr[index - 1].childNodes)
  } else if (index === 0) {
    moveItem(tl1, word.childNodes, arr[index + 1].childNodes, [])
  } else if (index === arr.length - 1) {
    moveItem(tl1, word.childNodes, [], arr[index - 1].childNodes)
  } else {
    moveItem(tl1, word.childNodes, [], [])
  }
});

/**
 * Значит у нас по сути есть currentLetter, prevLetter, nextLetter, а и так же большую роль играет положение
 *
 * Если currentLetter !== prevLetter && currentLetter !== nextLetter
 * тогда буква скрллиться со входа и на выход
 *
 * Если currentLetter === prevLetter && currentLetter !== nextLetter
 * тогда буква появляеться на входе и скролиться на выходе
 *
 * Если currentLetter !== prevLetter && currentLetter === nextLetter
 * тогда буква скролиться на входе и исчезает на выходе
 *
 * Если nextLetter === null && currentLetter !== prevLetter
 * тогда буква скролиться на входе и остаеться
 *
 * Если nextWord === null && currentLetter === prevLetter
 * тогда буква появляеться на входе и остаеться
 *
 * Терь это все надо грамотно передать в условия
 * движения мы организуем x & y а появление и исчезание будет через opacity в будущем сделаем
 * через альтернативное свойство
 *
 * Так далее давай определимся при каких условиях мы возвращаем нулевые значения допустим на
 * движении при входе
 *
 * 1. Скролл на входе всегда должен отрабатывать при условии если текущая буква не похожа на предыдущуюю
 * 2. Скролл на выходе всегда отрабатывает если следующая буква не похожа на текущуюю кроме того условия
 * если эта буква не последняя тогда скролл на выходе отключаем
 *
 * Терь надо разобраться с появлением
 * 1. П
 */

//Если следующий элемент не похожий на предыдущий то по заверешению этого можно скрыть тот для этого
// просто следует предварительно добавить гео в перемненую