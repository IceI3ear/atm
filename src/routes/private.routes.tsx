import { Navigate } from "react-router-dom";

import { PATH_LOGIN } from "./routes.paths";

export interface IPrivateRouterProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: IPrivateRouterProps) {
  const accessToken = Boolean(localStorage.getItem("accessToken"));
  return !accessToken ? <Navigate to={PATH_LOGIN} /> : children;
}
