import arrowUp from "@/assets/shared/icon-arrow-up.svg";
import Image from "next/image";
interface VotesProps {
  votes: number;
}

const Votes = ({ votes }: VotesProps) => {
  return (
    <>
      <Image src={arrowUp} alt="upvote" width={30} height={30} />
      <p>{votes}</p>
    </>
  );
};

export default Votes;
