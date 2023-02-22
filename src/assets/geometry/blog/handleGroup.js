const handleGroup = (group) => {
if (Array.isArray(group[0])) return []
  //получить сумму ширины
  let sumWidth = 0;
  group.forEach(item => {
    sumWidth += item.image.size.width
  })
  // выделяем процент ширины каждой картинки и пропорцию высоты и его сохраняем в объект css
  return group.map((item, index, arr) => {
      const percentWidth = arr.length > 1 ? item.image.size.width / sumWidth * 100 : 30
      const proportionHeight = item.image.size.height / item.image.size.width


    return {
      ...item,
      image: {
        ...item.image,
        css: {
          '--desc-width': percentWidth,
          '--proportion': proportionHeight
        }
      }
    }
  })
}

export default handleGroup