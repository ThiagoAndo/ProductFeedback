import comments from "@/assets/shared/icon-comments.svg";
import Image from "next/image";
interface VotesProps {
  num: number;
}

const ComNum = ({ num }: VotesProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image src={comments} alt="upvote" width={20} height={20} />
      <p>{num}</p>
    </div>
  );
};

export default ComNum;
