import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Links from "./Links/index";
import Friends from "./friends/index";
import { useModalContext } from "../../context/theme";

function Index() {
  const sidebar = useRef();
  const [isPreview, setisPreview] = useState()
  const {modalIsOpen} = useModalContext()
  useLayoutEffect(() => {
    setisPreview(modalIsOpen)
  }, [modalIsOpen])
  
  const handleHover = () => {
    sidebar.current.className = "sidebar open"
  }

  const handleLeave = () => {
    sidebar.current.className = "sidebar"
  }


  return (
    <div
      className={!isPreview ? "sidebar" : "sidebar zero_Index"}
      ref={sidebar}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeave()}
    >
      <Links />
      <Friends />
    </div>
  );
}

export default Index;
