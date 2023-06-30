import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Channels from "./components/Middle/Channels";
import RecentChat from "./components/Middle/RecentChat";
import Community from "./components/Middle/Community";
import Library from "./components/Middle/Library";
import Reels from "./components/Middle/Reels";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/channels",
        element: <Channels />,
      },
      {
        path: "/chats",
        element: <RecentChat />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/reels",
        element: <Reels />,
      },
    ]
  },
]);

export default router;
