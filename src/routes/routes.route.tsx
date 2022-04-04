import { RouteObject } from "react-router-dom";

import HomePage from "pages/homepage";
import Login from "pages/login";
import { PATH_HOMEPAGE, PATH_LOGIN } from "./routes.paths";
import PrivateRoute from "./private.routes";

export const routes: RouteObject[] = [
  {
    path: PATH_HOMEPAGE,
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    )
  },
  { path: PATH_LOGIN, element: <Login /> }
];
