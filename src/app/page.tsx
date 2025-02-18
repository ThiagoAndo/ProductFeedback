import Comments from "@/components/comments/FullComent";
import PuffLoader from "react-spinners/PuffLoader";
import { CSSProperties, Suspense } from "react";
const override: CSSProperties = {
  display: "block",
  margin: "5rem auto",
  borderColor: "red",
};
export default function Home() {
  return <Comments />;
}
