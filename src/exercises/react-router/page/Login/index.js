import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>我是登录页</div>
      <Link to="/article">跳转到文章页</Link>
      <button onClick={() => navigate("/article")}>跳转到文章页</button>
    </div>
  );
};

export default Login;
