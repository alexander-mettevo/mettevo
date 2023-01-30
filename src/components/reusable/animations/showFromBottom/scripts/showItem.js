const showItem = (tl, ref) => {
  tl.from(ref.current, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
  })
}

export default showItem;