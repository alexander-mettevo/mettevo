/**
 * Окей, условия следующие:
 *
 * 1) Основное изображение может занимать максимум 50% от ширины контейнера.
 * 2) Высота среднего изображения равна 50% высоты.
 * 3) Высоту задют нижние изображения то есть верхнее изображение равно 100% высоты самого высокого нижнего изображения.
 * 4) Ширине главного изображения равна ширина его родительского блока остальные же блоки подстраиваються под нее.
 *
 */

const blogList = (posts) => {

  const mainPicture = posts[0].image.size
  const midPicture = posts[1].image.size
  const firstSmallPicture = posts[2].image.size
  const secondSmallPicture = !!posts[3] ? posts[3].image.size : {width: 0.1, height: 0.1}



  const fullWidthContainer = 1440

  const mainPictureSize = {
    '--desc-width': 0,
    '--desc-height': 0,
    '--tablet-width': 0,
    '--tablet-height': 0,
    '--proportion': 0
  }

  const midPictureSize = {
    '--desc-width': 0,
    '--desc-height': 0,
    '--tablet-width': 0,
    '--tablet-height': 0,
    '--proportion': 0
  }

  const smallPictureSize = {
    first: {
      '--desc-width': 0,
      '--desc-height': 0,
      '--tablet-width': 0,
      '--tablet-height': 0,
      '--proportion': 0
    },
    second: {
      '--desc-width': 0,
      '--desc-height': 0,
      '--tablet-width': 0,
      '--tablet-height': 0,
      '--proportion': 0
    }
  }


// 1) Высчитаем ширину двух малых  изображения относительно параметров заданного контейнера
  const fullWidthSmallPictures = firstSmallPicture.width + secondSmallPicture.width
  const percentFullWidthSmallPictures = fullWidthSmallPictures / fullWidthContainer
  const percentFirstSmallPictureWidth = firstSmallPicture.width / fullWidthSmallPictures
  const percentSecondSmallPictureWidth = secondSmallPicture.width / fullWidthSmallPictures
  smallPictureSize.first['--desc-width'] = (percentFirstSmallPictureWidth * percentFullWidthSmallPictures) * 100
  smallPictureSize.second['--desc-width'] = (percentSecondSmallPictureWidth * percentFullWidthSmallPictures) * 100

// 2) Высчитываем процентное соотношение ширины, относительно контейнера 1440px (100%) у основного изображения
  const percentMainPicture = (mainPicture.width / fullWidthContainer) * 100

  if (percentMainPicture > 55) {
    mainPictureSize['--desc-width'] = 55
  } else if (percentMainPicture < 45) {
    mainPictureSize['--desc-width'] = 45
  } else {
    mainPictureSize['--desc-width'] = percentMainPicture
  }

  setProportion(smallPictureSize, firstSmallPicture, secondSmallPicture, mainPictureSize, midPicture, mainPicture, midPictureSize)
// 3) Высчитываем соотношение у среднего изображени
  const heightSmallPictureSizeFirst = smallPictureSize.first['--desc-width'] * smallPictureSize.first['--proportion']
  const heightSmallPictureSizeSecond = smallPictureSize.second['--desc-width'] * smallPictureSize.second['--proportion']

  if (heightSmallPictureSizeFirst > heightSmallPictureSizeSecond) {
    midPictureSize['--desc-height'] = heightSmallPictureSizeFirst
  } else {
    midPictureSize['--desc-height'] = heightSmallPictureSizeSecond
  }



  // так а что для того изображения ну высота там по нижнему блоку а ширина по пропорции, и что делать???
  // тогда выходит height 100% а ширина?? ладно давай пока так посчитаем

  return posts.map((post, index) => {
    return {
      ...post,
      image: {
        ...post.image,
        css: index === 0 ? mainPictureSize : index === 1 ? midPictureSize : index === 2 ? smallPictureSize.first : smallPictureSize.second
      }
    }
  })
}

const setProportion = (
  smallPictureSize, firstSmallPicture,
  secondSmallPicture, mainPictureSize,
  midPicture, mainPicture, midPictureSize
) => {
  smallPictureSize.first['--proportion'] = firstSmallPicture.height / firstSmallPicture.width
  smallPictureSize.second['--proportion'] = secondSmallPicture.height / secondSmallPicture.width
  mainPictureSize['--proportion'] = mainPicture.height / mainPicture.width
  midPictureSize['--proportion'] = midPicture.width / midPicture.height
}

export default blogList