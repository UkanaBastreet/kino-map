import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <button {...props} className={"Button " + props?.className}>
        {children}
      </button>
    </>
  );
};
