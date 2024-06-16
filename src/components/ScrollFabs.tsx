import { useScrollPosition } from "../hooks/useScrollPosition"
import { handleScrollDown, handleScrollTop } from "../utils/windowScroll"
import Fab from "./Fab"


const ScrollFabs = () => {
    const {isAtTheBottom,isAtTheTop} = useScrollPosition()
  return (
    <>
        {!isAtTheTop ? <Fab onClick={handleScrollTop} className="rotate-180"/> : <div className="h-14"></div>}
        {!isAtTheBottom  ? <Fab onClick={handleScrollDown}/> : <div className="h-14"></div>}
    </>
  )
}

export default ScrollFabs