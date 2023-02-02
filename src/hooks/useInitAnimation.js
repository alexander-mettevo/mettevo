import {useEffect, useRef} from "react";

const useInitAnimation = (animationCallback, animationCallbackProps = []) => {
  const ref = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    timelineRef.current = animationCallback(ref, ...animationCallbackProps)
  }, [])

  const handleOnMouseEnter = () => timelineRef.current.play()

  const handleOnMouseLeave = () => timelineRef.current.reverse()

  return [ref, timelineRef, handleOnMouseEnter, handleOnMouseLeave]
}

export default useInitAnimation