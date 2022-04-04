import "./styles.scss";
import avt from "assets/imageAvt.jpg";

interface QueueItemProps {
  namePeople: string;
  transaction: number;
}

export default function QueueItem(props: QueueItemProps) {
  const { namePeople, transaction } = props;

  return (
    <div className="queue-item-container">
      <div className="image">
        <img src={avt} alt="avt" />
      </div>
      <div className="information">
        <h4 className="user-name">{namePeople}</h4>
        <p className="index">{transaction}</p>
      </div>
    </div>
  );
}
