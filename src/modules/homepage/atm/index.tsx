import ProfileItem from "components/profile";
import { deleteAtm } from "redux/atms.slice";
import { useAppDispatch } from "redux/hook";
import { IAtmItem } from "types/atm.item";
import "./styles.scss";

interface ATMProps {
  atmData: IAtmItem[];
}

export default function ATM({ atmData }: ATMProps) {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    id && dispatch(deleteAtm(id));
  };

  return (
    <div className="atm-container">
      {atmData?.map((item: IAtmItem) => (
        <div key={item.id}>
          <ProfileItem
            handleClickClose={() => handleDelete(item.id)}
            status={item.status}
            atmName={item.name}
            transaction={item.transaction}
            nameTransaction={item.client}
          />
        </div>
      ))}
    </div>
  );
}
