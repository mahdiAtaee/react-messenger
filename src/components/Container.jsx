import Chat from "./Main/Chat";
import Library from "./Main/Library";
import Channels from "./Main/Channel";
import Community from "./Main/Community";
import Reels from "./Main/Reels";

function Container() {
  let components = {}
  components.recent = <Chat />
  components.library = <Library />
  components.channel = <Channels />
  components.community = <Community />
  components.reels = <Reels />
  return components
}

export default Container