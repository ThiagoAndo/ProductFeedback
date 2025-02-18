import PuffLoader from "react-spinners/PuffLoader";
import { CSSProperties } from "react";
const override: CSSProperties = {
  display: "block",
  margin: "5rem auto",
  borderColor: "red",
};

export default function NewsLoading() {
  return (
    <PuffLoader
      color={"#4661E6"}
      loading={true}
      cssOverride={override}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
