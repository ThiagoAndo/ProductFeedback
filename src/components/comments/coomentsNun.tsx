import comments from "@/assets/shared/icon-comments.svg";
import Image from "next/image";
import Card from "../UI/card";
interface VotesProps {
  num: number;
}

const ComNum = ({ num }: VotesProps) => {
  return (
    <Card tailwind="flex flex-row gap-2 justify-self-end h-fit md:mt-6">
      <Image src={comments} alt="upvote" className="w-[25px]"  />
      <p className="text-z3A4374 font-bold">{num}</p>
    </Card>
  );
};

export default ComNum;
