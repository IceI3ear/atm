import { ComponentPropsWithoutRef } from "react";

import "./styles.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" className="button-container" {...props}>
      {children}
    </button>
  );
}
