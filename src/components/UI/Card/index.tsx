import { CardWrapper } from "./styled";

interface CardProps {
  children: React.ReactNode;
  padding?: number;
}

export function Card({ children, padding }: CardProps) {
  return <CardWrapper padding={padding}>{children}</CardWrapper>;
}
