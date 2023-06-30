import Profile from "../../../assets/images/sky.jpg";
import User1 from "../../../assets/images/man1.jpg";
import User2 from "../../../assets/images/man2.jpg";
import User3 from "../../../assets/images/man3.jpg";
import User4 from "../../../assets/images/man4.jpg";
import Dots from "../../../assets/images/dots.png";
import Mute from "../../../assets/images/mute.png";
import Volume from "../../../assets/images/volume.png";
import Exit from "../../../assets/images/exit.png";
import Block from "../../../assets/images/block.png";
import Magnifier from "../../../assets/images/magnifier.png";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [mute, setMute] = useState(true);
  const moreSettingItem = useRef();
  const handleVolume = () => setMute(!mute);
  const moreSettingRef = useRef();
  const handleMoreSettingClick = () => {
    moreSettingItem.current.classList.toggle("hide");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          moreSettingItem.current.classList.add("hide");
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreSettingRef);

  return (
    <div className="header">
      <div className="right-section">
        <div className="profile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="content">
          <span className="channel-name">wallpaper</span>
          <div className="channel-description">4k مشترک</div>
        </div>
      </div>
      <div className="left-section">
        <div className="participants">
          <ul>
            <li>
              <img src={User1} alt="user" className="participant-avatar" />
            </li>
            <li>
              <img src={User2} alt="user" className="participant-avatar" />
            </li>
            <li>
              <img src={User3} alt="user" className="participant-avatar" />
            </li>
            <li>
              <img src={User4} alt="user" className="participant-avatar" />
            </li>
            <li>
              <div className="other-participant">
                <span>+100</span>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="more-settings"
          onClick={() => handleMoreSettingClick()}
          ref={moreSettingRef}
        >
          <span className="icon">
            <img src={Dots} alt="dot" />
          </span>
          <ul className="more-setting-items hide" ref={moreSettingItem}>
            <li onClick={() => handleVolume()}>
              <span className="icon">
                <img src={mute ? Mute : Volume} alt="mute" />
              </span>
              <span className="more-setting-title">صدادار کردن</span>
            </li>
            <li>
              <span className="icon">
                <img src={Magnifier} alt="search" />
              </span>
              <span className="more-setting-title">جستجو</span>
            </li>
            <li>
              <span className="icon">
                <img src={Block} alt="Block" />
              </span>
              <span className="more-setting-title">گزارش</span>
            </li>
            <li>
              <span className="icon">
                <img src={Exit} alt="exit" />
              </span>
              <span className="more-setting-title">ترک کانال</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
