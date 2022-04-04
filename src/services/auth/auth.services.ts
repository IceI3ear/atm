import request from "api-client/axios-client";
import { ILogin } from "types/user";

export const AuthServices = {
  login(login: ILogin): Promise<any> {
    return request.post("/auth/login", login);
  }
};
