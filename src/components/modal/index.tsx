import { ComponentPropsWithoutRef, ReactNode } from "react";

import "./styles.scss";
import imgAtm from "assets/atm.png";
import imgUser from "assets/imageAvt.jpg";
import Button from "components/button";

interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  mode: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

export default function Modal({
  isOpen,
  mode,
  title,
  children,
  onClose,
  onConfirm
}: ModalProps) {
  return (
    <div>
      {isOpen ? (
        <div className="modal-container">
          <div className="modal">
            <div className="title-container">
              <h1 className="title">{title}</h1>
            </div>
            {mode === "atm" ? (
              <img src={imgAtm} alt="imageAtm" />
            ) : (
              <img src={imgUser} alt="imageUset" />
            )}
            {children}
            <div className="modal-button">
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="button" onClick={onConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
