import { ComponentProps } from "react";
import { DefaultButton } from "./styled";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ children, ...props }: ButtonProps) {
  return <DefaultButton {...props}>{children}</DefaultButton>;
}
