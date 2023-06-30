import ReactModal from "react-modal";
import { actionTypes, useModalDispatcher } from "../../context/theme";
import { useRef } from "react";
import Dots from "../../assets/images/dots.png";
import Drow from "../../assets/images/pen_underline.png";
import Close from "../../assets/images/close.png";
import Download from "../../assets/images/download.png";
import Share from "../../assets/images/share.png";
import { saveAs } from "file-saver";
import { useState } from "react";
function Modal({ modalIsOpen, mediaSrc, modalContent, children }) {
  const subtitle = useRef();
  const dispatch = useModalDispatcher();
  const [openSetting, setOpenSetting] = useState(true);

  const customStyles = {
    content: {
      top: "50px",
      left: "50px",
      right: "50px",
      bottom: "50px",
      padding: "0",
      border: "none",
      transition: "0.5s ease-in-out",
    },
  };

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = "red";
    }
  }

  function handleCloseModal() {
    dispatch({
      type: actionTypes.TOGGLE_MODAL,
    });
  }

  const handleDownloadFile = () => {
    let url = mediaSrc;
    saveAs(url, "file");
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={(e) => handleCloseModal()}
      style={customStyles}
      onAfterClose={afterOpenModal()}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div className="modal__header">
        <div className="modal__header--right-section">
          <div
            className="modal__header close--modal"
            onClick={(e) => handleCloseModal()}
          >
            <img src={Close} alt="close modal" className="close__modal--icon" />
          </div>
        </div>
        <div className="modal__header--left-section">
          <div className="modal__header drow--on--picture">
            <img src={Drow} alt="" className="drow__on__picture--icon" />
          </div>
          <div
            className="modal__header download--media"
            onClick={() => handleDownloadFile()}
          >
            <img src={Download} alt="" className="download__media--icon" />
          </div>
          <div className="modal__header more--setting--icon">
            <img
              src={Dots}
              alt=""
              className="more__setting--icon"
              onClick={() => setOpenSetting(!openSetting)}
            />
            <ul
              className={
                openSetting
                  ? "modal__header--more__setting"
                  : "modal__header--more__setting open"
              }
            >
              <li>
                <img src={Share} alt="share" />
                <a href="">اشتراک گذاری</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="modal__body">
        <img src={mediaSrc} alt="media" />
      </div>
      <div className="modal__footer">
        <p>{modalContent}</p>
      </div>
    </ReactModal>
  );
}

export default Modal;
