const handleScrollDown = () => {
    window.scrollTo({
        behavior:'smooth',
        top:window.scrollY + window.innerHeight
    });
  }
  const handleScrollTop = () => {
    window.scrollTo({
        behavior:'smooth',
        top:window.scrollY - window.innerHeight
    });
  }
  export {handleScrollDown, handleScrollTop}