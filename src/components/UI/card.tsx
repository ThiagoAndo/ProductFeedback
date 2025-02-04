import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  //   return <div className="rounded-md ml-[5%] mr-[5%] overflow-hidden">{children}</div>;
  return (
    <div className="rounded-md overflow-hidden">{children}</div>
  );
};

export default Card;
