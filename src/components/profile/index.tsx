import "./styles.scss";
import imageATM from "assets/atm.png";
import imageAvt from "assets/imageAvt.jpg";

interface ProfileItemProps {
  atmName: string;
  transaction: number;
  status: string;
  nameTransaction: string;
  handleClickClose: () => void;
}

export default function ProfileItem(props: ProfileItemProps) {
  const { atmName, transaction, status, nameTransaction, handleClickClose } =
    props;

  return (
    <div className="profile-item-container">
      <div className="delete-btn">
        <button type="button" className="btn" onClick={handleClickClose}>
          x
        </button>
      </div>
      <div className="image">
        <img src={imageATM} alt="avtAtm" />
      </div>
      <div className="information">
        <h3 className="atm-name"> {status}</h3>
        <p className="user-name">{atmName}</p>
      </div>
      <div className="transaction-atm">
        <div className="transaction-image">
          <img src={imageAvt} alt="avt" />
        </div>
        <div className="transaction-information">
          <h4 className="transaction-name">{nameTransaction}</h4>
          <p className="transaction-number">
            Pending transaction: {transaction}
          </p>
        </div>
      </div>
    </div>
  );
}
