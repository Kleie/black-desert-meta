import { CardWrapper } from "./styled";

interface CardProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  padding?: number;
}

export function Card({ children, padding, ...rest }: CardProps) {
  return (
    <CardWrapper {...rest} padding={padding}>
      {children}
    </CardWrapper>
  );
}
