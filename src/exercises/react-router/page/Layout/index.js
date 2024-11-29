import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      我是一级路由
      <br />
      <Link to="/board">面板</Link>
      <br />
      <Link to="/about">关于</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
