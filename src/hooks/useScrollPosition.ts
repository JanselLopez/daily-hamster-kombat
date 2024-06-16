import { useWindowScroll } from "react-use"

const useScrollPosition = () => {
    const { y } = useWindowScroll()
    const isAtTheBottom = (window.innerHeight + Math.round(y)) >= document.body.offsetHeight
    const isAtTheTop = y === 0
    return {isAtTheBottom, isAtTheTop}
}

export {useScrollPosition}