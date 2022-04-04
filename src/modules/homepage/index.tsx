import { useEffect, useState } from "react";

import Modal from "components/modal";
import {
  createAtm,
  createPeople,
  getAllAtms,
  selectAtmData
} from "redux/atms.slice";
import { useAppDispatch, useAppSelector } from "redux/hook";
import Input from "components/input";
import { IQueueItem } from "types/queue.item";
import ButtonControl from "./button-control";
import Queue from "./queue";
import "./styles.scss";
import Transaction from "./transaction";
import ATM from "./atm";

export default function HomePageContainer() {
  const [isOpenModalAtm, setIsOpenModalAtm] = useState<boolean>(false);
  const [isOpenModalUser, setIsOpenModalUser] = useState<boolean>(false);
  const [atmName, setAtmName] = useState<string>("");
  const [people, setPeople] = useState<IQueueItem>({
    namePeople: "",
    transaction: 0
  });
  const dispatch = useAppDispatch();
  const atmsData = useAppSelector(selectAtmData);

  const handleToggleModalAtm = () => {
    setIsOpenModalAtm(!isOpenModalAtm);
  };
  const handleToggleModalUser = () => {
    setIsOpenModalUser(!isOpenModalUser);
  };
  const handleConfirmModalAtm = () => {
    atmName && dispatch(createAtm(atmName));
    handleToggleModalAtm();
  };
  const handleConfirmModalUser = () => {
    dispatch(createPeople(people));
  };
  const handleChangeAtmName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setAtmName(value);
  };
  const handleChangePeople = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setPeople({ ...people, [name]: value });
  };

  useEffect(() => {
    dispatch(getAllAtms());
  });

  return (
    <>
      <div className="homepage-container">
        <div className="button-control">
          <ButtonControl
            handleClickAddAtm={handleToggleModalAtm}
            handleClickAddTransaction={handleToggleModalUser}
          />
        </div>
        <div className="atm-transaction-queue">
          <div className="atm-transaction">
            <div className="atm">
              <ATM atmData={atmsData.atm} />
            </div>
            <div className="transaction">
              <Transaction atmData={atmsData.atm} />
            </div>
          </div>
          <div className="queue">
            <Queue queueData={atmsData.queue} />
          </div>
        </div>
      </div>
      <Modal
        mode="atm"
        isOpen={isOpenModalAtm}
        title="Create ATM"
        onClose={handleToggleModalAtm}
        onConfirm={handleConfirmModalAtm}
      >
        <Input
          nameField="ATM name"
          name="atmName"
          value={atmName}
          onChange={handleChangeAtmName}
        />
      </Modal>
      <Modal
        mode="user"
        isOpen={isOpenModalUser}
        title="Create Transaction"
        onClose={handleToggleModalUser}
        onConfirm={handleConfirmModalUser}
      >
        <Input
          nameField="Name People"
          name="namePeople"
          value={people.namePeople}
          onChange={handleChangePeople}
        />
        <Input
          type="number"
          nameField="Transaction"
          name="transaction"
          value={people.transaction}
          onChange={handleChangePeople}
        />
      </Modal>
    </>
  );
}
