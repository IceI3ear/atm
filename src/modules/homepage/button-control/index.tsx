import { useNavigate } from "react-router-dom";

import Button from "components/button";
import { logout } from "redux/auth.slice";
import { useAppDispatch } from "redux/hook";
import "./styles.scss";
import { PATH_LOGIN } from "routes/routes.paths";

interface ButtonControlProps {
  handleClickAddAtm: () => void;
  handleClickAddTransaction: () => void;
}

export default function ButtonControl(props: ButtonControlProps) {
  const { handleClickAddAtm, handleClickAddTransaction } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logout());
    navigate(PATH_LOGIN);
  };

  return (
    <div className="button-control-container">
      <div className="button-add">
        <Button onClick={handleClickAddAtm}>Add ATM</Button>
        <Button onClick={handleClickAddTransaction}>Add Transaction</Button>
      </div>
      <div className="button-logout">
        <Button onClick={handleLogOut}>Log out</Button>
      </div>
    </div>
  );
}
