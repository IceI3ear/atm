import { IAtmItem } from "types/atm.item";
import "./styles.scss";

interface TransactionProps {
  atmData: IAtmItem[];
}

export default function Transaction({ atmData }: TransactionProps) {
  return (
    <div className="transaction-container">
      <div className="processed-client">
        <h3>Processed Client</h3>
      </div>
      {atmData?.map((item: IAtmItem) => (
        <div className="processed-name" key={item.id}>
          <div className="name">
            <h5>{item.name} :</h5>
          </div>
          <p>{item.processedClientsAtm}</p>
        </div>
      ))}
    </div>
  );
}
