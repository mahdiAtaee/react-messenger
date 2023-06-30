import { useLocation } from "react-router-dom";
import Chat from "./Chat";
import Library from "./Library";
import Channel from "./Channel";
import Community from "./Community";
import Reels from "./Reels";
import { useEffect, useState } from "react";

function getComponent(location) {
  let render = null;
  switch (location) {
    case "/library":
      render = <Library />;
      break;
    case "/channels":
      render = <Channel />;
      break;
    case "/community":
      render = <Community />;
      break;
    case "/reels":
      render = <Reels />;
      break;
    case "/chats":
    default:
      render = <Chat />;
      break;
  }
  return render;
}

function Index() {
  const path = useLocation();
  const location = path.pathname;
  const [component, setComponent] = useState();
  useEffect(() => {
    const renderComponent = getComponent(location);
    setComponent(renderComponent);
  }, [location]);
  return (
    <div className="Main">
      {component}
    </div>
  );
}

export default Index;
