import arrowUp from "@/assets/shared/icon-arrow-up.svg";
import Image from "next/image";
interface VotesProps {
  votes: number;
  title: string;
}

const Votes = ({ votes, title }: VotesProps) => {
  console.log("Title: " + title, "Votes: " + votes);
  return (
    <>
      <Image src={arrowUp} alt="upvote" className="w-[10px] mb-px"/>
      <p className="text-z3A4374 font-bold">{votes}</p>
    </>
  );
};

export default Votes;
