import Clip from "../../../assets/images/paper-clip.png";
import Send from "../../../assets/images/send-paper.png";

function Footer() {
  return (
    <div className="footer">
      <div className="input-wrapper">
        <input type="text" placeholder="چیزی تایپ کنید..."/>
        <div className="control-text">
          <img src={Clip} alt="clip" />
          <img src={Send} alt="send" />
        </div>
      </div>
    </div>
  )
}

export default Footer