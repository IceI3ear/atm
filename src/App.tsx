import { useNavigate, useRoutes } from "react-router-dom";
import { useEffect } from "react";

import { routes } from "routes/routes.route";
import { useAppSelector } from "redux/hook";
import "./App.css";
import { selectIsLogin } from "redux/auth.slice";
import { PATH_HOMEPAGE } from "routes/routes.paths";

function App() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const isCheck = Boolean(localStorage.getItem("accessToken"));
  const isLogin: boolean = useAppSelector(selectIsLogin);

  useEffect(() => {
    if (isCheck || isLogin) {
      navigate(PATH_HOMEPAGE);
    }
  }, [isCheck, navigate, isLogin]);

  return <div className="App"> {element}</div>;
}

export default App;
