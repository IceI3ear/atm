import { useState } from "react";

import Button from "components/button";
import Input from "components/input";
import "./styles.scss";
import { ILogin } from "types/user";
import { AuthServices } from "services/auth/auth.services";
import { useAppDispatch } from "redux/hook";
import { login } from "redux/auth.slice";

export default function LoginForm() {
  const [user, setUser] = useState<ILogin>({
    email: "",
    password: ""
  });
  const [err, setErr] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
    if (!user.email || !user.password) {
      setErr("Input is required");
    } else if (!regex.test(user.password)) {
      setErr("Wrong password");
    } else {
      setErr("");
      try {
        const data = await AuthServices.login(user);
        if (data) {
          dispatch(login());
          localStorage.setItem("accessToken", data.PRIVATE_TOKEN);
        }
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2> Login Form </h2>
      {err && err}
      <div className="login-input">
        <Input
          type="input"
          nameField="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          nameField="Password "
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="button-login">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
