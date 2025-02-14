import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  tailwind?: string;
}

const Card = ({ children, tailwind }: CardProps) => {
  return (
    <div className={`rounded-md ${tailwind} overflow-hidden`}>{children}</div>
  );
};

export default Card;
