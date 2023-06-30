import { useState } from "react";

function Footer() {
  const [isMute, setIsMute] = useState(false);
  return (
    <div className="footer" onClick={() => setIsMute(!isMute)}>
      <span className="set-volume">
        {isMute ? "با صدا کردن" : "بی صدا کردن"}
      </span>
    </div>
  );
}

export default Footer;
