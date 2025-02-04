"use client";
import { useReducer, useEffect } from "react";
import Card from "@/components/UI/card";
import { ObjectId } from "mongodb";

export type Comment = {
  _id?: ObjectId;
  productRequests_id: number;
  username: string;
  id: number;
  content: string;
};

type State = {
  isFetching: boolean;
  error: unknown;
  comment: Comment[];
};
type Fetch = {
  type: "FETCHING";
};

type Error = {
  type: "ERROR";
  error: unknown;
};

type Comments = {
  type: "COMMENTS";
  comment: Comment[];
};

type Action = Fetch | Error | Comments;

const initialState: State = {
  isFetching: false,
  error: null,
  comment: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, isFetching: true };
    case "ERROR":
      return { ...state, isFetching: false, error: action.error };
    case "COMMENTS":
      return {
        ...state,
        isFetching: false,
        comment: action.comment,
      };
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchComments = async () => {
      dispatch({ type: "FETCHING" });
      try {
        const response = await fetch("http://localhost:8080/comment");
        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: Unable to fetch comments.`
          );
        }
        const data = await response.json();
        console.log(data);
        dispatch({ type: "COMMENTS", comment: data });
      } catch (error) {
        dispatch({ type: "ERROR", error: error });
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="bg-color6 p-5 flex flex-col gap-7">
      {state.comment.map((comment) => (
        <Card key={comment.id}>
          <div className="bg-white p-6 ">
            <h1>{comment.username}</h1>
            <h2>{comment.content}</h2>
          </div>
        </Card>
      ))}
    </div>
  );
}
