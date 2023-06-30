import { Outlet } from "react-router";

function index() {
  return (
  <div className="middle">
    <Outlet />
  </div>
  );
}

export default index;
