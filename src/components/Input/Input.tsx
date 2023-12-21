import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
export const Input: FC<InputProps> = (props) => {
  return (
    <>
      <input {...props} className={"Input " + props?.className} />
    </>
  );
};
