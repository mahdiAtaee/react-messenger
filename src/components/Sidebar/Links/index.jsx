import { Link, useLocation } from "react-router-dom";
import Home from "../../../assets/images/home.png";
import Library from "../../../assets/images/four-dots.png";
import Community from "../../../assets/images/user.png";
import Channel from "../../../assets/images/live.png";
import Reel from "../../../assets/images/video.png";
import { useEffect, useState } from "react";


function Index() {
  const location = useLocation()
  const [activePage, setActivePage] = useState('/chats')
  useEffect(()=>{
    setActivePage(location.pathname)
  },[location])
  return (
    <div>
      <div className="logo">
        {/* <img src={Logo} alt="logo" /> */}
        <span title="logo">logo</span>
      </div>
      <ul className="action-links">
        <li className={activePage === '/chats' ? 'active' : ''}>
          <Link to={"/chats"}>
            <div className="img-wrapper">
              <img src={Home} alt="Home" title="Home" />
            </div>
            <span className="title">چت های اخیر</span>
          </Link>
        </li>
        <li className={activePage === '/library' ? 'active' : ''}>
          <Link to={"/library"}>
            <div className="img-wrapper">
              <img src={Library} alt="Library" title="Library" />
            </div>
            <span className="title">کتابخانه</span>
          </Link>
        </li>
        <li className={activePage === '/channels' ? 'active' : ''}>
          <Link to={"/channels"}>
            <div className="img-wrapper">
              <img src={Channel} alt="Channel" title="Channel" />
            </div>
            <span className="title">کانال ها</span>
          </Link>
        </li>
        <li className={activePage === '/community' ? 'active' : ''}>
          <Link to={"/community"}>
            <div className="img-wrapper">
              <img src={Community} alt="Community" title="Community" />
            </div>
            <span className="title">اجتماع</span>
          </Link>
        </li>
        <li className={activePage === '/reels' ? 'active' : ''}>
          <Link to={"/reels"}>
            <div className="img-wrapper">
              <img src={Reel} alt="Reel" title="Reel" />
            </div>
            <span className="title">حلقه ها</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
