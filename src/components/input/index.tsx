import { ComponentPropsWithoutRef } from "react";

import "./styles.scss";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  nameField: string;
}

export default function Input({ nameField, ...props }: InputProps) {
  return (
    <div className="form__group field">
      <input className="form__field" placeholder={nameField} {...props} />
      <label htmlFor={nameField} className="form__label">
        {nameField}
      </label>
    </div>
  );
}
