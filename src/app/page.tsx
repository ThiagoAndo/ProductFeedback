"use client";
import { useReducer, useEffect } from "react";
import Card from "@/components/UI/card";
import Votes from "@/components/comments/votes";
import ComNum from "@/components/comments/coomentsNun";

export type Request = {
  _id?: string;
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  numCom: number;
};

type State = {
  isFetching: boolean;
  error: unknown;
  request: Request[];
};

type Fetch = {
  type: "FETCHING";
};

type Error = {
  type: "ERROR";
  error: unknown;
};

type RequestState = {
  type: "COMMENTS";
  request: Request[];
};

type Action = Fetch | Error | RequestState;

const initialState: State = {
  isFetching: false,
  error: null,
  request: [],
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
        request: action.request,
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
        const response = await fetch("http://localhost:8080/request");
        if (!response.ok) {
          throw new Error(
            `Error ${response.status}: Unable to fetch comments.`
          );
        }
        const data = await response.json();
        console.log(data[0]);
        dispatch({ type: "COMMENTS", request: data });
      } catch (error) {
        dispatch({ type: "ERROR", error: error });
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="bg-F7F8FD flex flex-col gap-7">
      {state.request.map((request) => (
        <Card key={request._id}>
          <div className="flex gap-1 flex-row">
            <Card
              key={request.id}
              tailwind={
                "bg-red-600 w-[60px] h-[50px] flex flex-row  gap-2 items-center p-5 justify-center md:flex-col"
              }
            >
              <Votes votes={request.upvotes} />
            </Card>
            <div>
              <h1>{request.title}</h1>
              <h2>{request.description}</h2>
            </div>
            <ComNum num={request.numCom} />
          </div>
        </Card>
      ))}
    </div>
  );
}
