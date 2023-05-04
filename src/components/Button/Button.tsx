import { HTMLProps, ReactNode } from "react";
import "./Button.scss";

interface IButton extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  variant: string;
}

const Button = ({ children, variant }: IButton) => {
  return (
    <button className={`custom-button ${variant} draw-border`}>
      {children}
    </button>
  );
};

export default Button;
