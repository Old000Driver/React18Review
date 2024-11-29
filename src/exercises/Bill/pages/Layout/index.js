import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Button color="primary">全局样式</Button>
      <Button className="purple" color="primary">局部样式</Button>
    </div>
  );
};

export default Layout;














