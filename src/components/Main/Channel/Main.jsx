import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sky from "../../../assets/images/sky.jpg";
import hamburger from "../../../assets/images/fastfood.jpg";
import ThumbUP from "../../../assets/images/like.png";
import Fire from "../../../assets/images/flame.png";
import { useState } from "react";
import Modal from "../../utilities/Modal";
import {
  actionTypes,
  useModalContext,
  useModalDispatcher,
} from "../../../context/theme";
import { useRef } from "react";

function Main() {
  const content = useRef(null);
  const [countFireReaction, setCountFireReaction] = useState(0);
  const [countLikeReaction, setCountLikeReaction] = useState(0);
  const [isSelectReaction, setIsSelectReaction] = useState(false);
  const [MediaSrc, setMediaSrc] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [selectPost, setSelectPost] = useState(false)
  const { modalIsOpen } = useModalContext();
  const dispatch = useModalDispatcher();
  const handleReactionClick = (e) => {
    const ReactionElement = e.currentTarget;
    const UserReactionSelected =
      ReactionElement.getAttribute("data-reactionname");
    setIsSelectReaction(true);

    if (!isSelectReaction) {
      switch (UserReactionSelected) {
        case "Like":
          setCountLikeReaction(countLikeReaction + 1);
          ReactionElement.classList.add("selected");
          break;
        case "Fire":
          setCountFireReaction(countFireReaction + 1);
          ReactionElement.classList.add("selected");
          break;
      }
    } else {
      switch (UserReactionSelected) {
        case "Like":
          if (countLikeReaction > 0)
            setCountLikeReaction(countLikeReaction - 1);
          ReactionElement.classList.remove("selected");
          break;
        case "Fire":
          if (countFireReaction > 0)
            setCountFireReaction(countFireReaction - 1);
          ReactionElement.classList.remove("selected");
      }
      setIsSelectReaction(false);
    }
  };
  const handlePreview = (e) => {
    const target = e.target;
    const src = target.src;
    const c = content.current.innerHTML;
    dispatch({
      type: actionTypes.TOGGLE_MODAL,
    });
    setMediaSrc(src);
    setModalContent(c);
  };
  const handleSelectPost = (e) => {
    const target = e.target;
    setSelectPost(target.checked)
  };

  return (
    <Container dir="ltr">
      <Row className={selectPost ? "post-wrapper selected" : "post-wrapper"}>
        <input type="checkbox" id="selectPost" className="selectPostCheckBox" onChange={(e) => handleSelectPost(e)}/>
        <label htmlFor="selectPost" className="selectPostLabel"></label>
        <Col sm={12} md={8} lg={5}>
          <div className="post-container">
            <div className="post-header">
              <span className="channel-name">Wallpaper</span>
            </div>
            <div
              className="post-image-wrapper"
              onClick={(e) => handlePreview(e)}
            >
              <img src={Sky} alt="sky" className="post-image" />
            </div>
            <div className="post-content">
              <div className="content" ref={content}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit delectus vero, alias cumque ipsam dolores ab fugiat
                tenetur ullam voluptatibus.
              </div>
              <div className="reactions">
                <div
                  className="reaction"
                  data-reactionname="Like"
                  onClick={(e) => handleReactionClick(e)}
                >
                  <img src={ThumbUP} alt="thumb" className="reaction-image" />
                  <span className="reaction-counter">{countLikeReaction}</span>
                </div>
                <div
                  className="reaction"
                  data-reactionname="Fire"
                  onClick={(e) => handleReactionClick(e)}
                >
                  <img src={Fire} alt="fire" className="reaction-image" />
                  <span className="reaction-counter">{countFireReaction}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="post-wrapper">
        <Col sm={12} md={8} lg={5}>
          <div className="post-container">
            <div className="post-header">
              <span className="channel-name">Wallpaper</span>
            </div>
            <div className="post-image-wrapper">
              <img src={hamburger} alt="sky" className="post-image" />
            </div>
            <div className="post-content">
              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit delectus vero, alias cumque ipsam dolores ab fugiat
                tenetur ullam voluptatibus.
              </div>
              <div className="reactions">
                <div
                  className="reaction"
                  data-reactionname="Like"
                  onClick={(e) => handleReactionClick(e)}
                >
                  <img src={ThumbUP} alt="thumb" className="reaction-image" />
                  <span className="reaction-counter">{countLikeReaction}</span>
                </div>
                <div
                  className="reaction"
                  data-reactionname="Fire"
                  onClick={(e) => handleReactionClick(e)}
                >
                  <img src={Fire} alt="fire" className="reaction-image" />
                  <span className="reaction-counter">{countFireReaction}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        modalIsOpen={modalIsOpen}
        mediaSrc={MediaSrc}
        modalContent={modalContent}
      ></Modal>
    </Container>
  );
}

export default Main;
