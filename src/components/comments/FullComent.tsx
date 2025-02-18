import Card from "@/components/UI/card";
import Votes from "@/components/comments/votes";
import CommentsQuantity from "@/components/comments/CommentsQuantity";
import { fetchComments } from "@/lib/http";

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


const Comments = async () => {
  const data = await fetchComments();


  return (
    <div className="bg-F7F8FD w-[355px] flex flex-col gap-7 p-4 m-auto md:w-max">
      {data.map((request:Request) => (
        <Card
          key={request._id}
          tailwind="grid grid-rows-[100px_50px] grid-cols-2 gap-1 bg-FFFFFF text-[13px] relative p-5 md:flex md:flex-row md:gap-5"
        >
          <Card
            key={request.id}
            tailwind="bg-F2F4FF h-fit w-fit p-1 pr-3 pl-3 flex flex-row gap-2 items-center justify-center md:flex-col"
          >
            <Votes votes={request.upvotes} title={request.title} />
          </Card>
          <div className="col-start-1 col-end-3 row-start-1 row-end-2 md:w-[80%]">
            <h1 className="font-bold">{request.title}</h1>
            <p>{request.description}</p>
            <Card tailwind="flex gap-1 flex-row bg-F2F4FF w-fit p-1 pr-3 pl-3 mt-1 text-z4661E6 font-semibold">
              {request.category}
            </Card>
          </div>
          <CommentsQuantity num={request.numCom} />
        </Card>
      ))}
    </div>
  );
};
export default Comments;


// type State = {
//   isFetching: boolean;
//   error: unknown;
//   request: Request[];
// };

// type Fetch = {
//   type: "FETCHING";
// };

// type Error = {
//   type: "ERROR";
//   error: unknown;
// };

// type RequestState = {
//   type: "COMMENTS";
//   request: Request[];
// };

// type Action = Fetch | Error | RequestState;
// const initialState: State = {
//   isFetching: false,
//   error: null,
//   request: [],
// };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "FETCHING":
//       return { ...state, isFetching: true };
//     case "ERROR":
//       return { ...state, isFetching: false, error: action.error };
//     case "COMMENTS":
//       return {
//         ...state,
//         isFetching: false,
//         request: action.request,
//       };
//     default:
//       return state;
//   }
// };

// function Comments() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   useEffect(() => {
//     const fetchComments = async () => {
//       dispatch({ type: "FETCHING" });
//       try {
//         const response = await fetch("http://localhost:8080/request");
//         if (!response.ok) {
//           throw new Error(
//             `Error ${response.status}: Unable to fetch comments.`
//           );
//         }
//         const data = await response.json();
//         dispatch({ type: "COMMENTS", request: data });
//       } catch (error) {
//         dispatch({ type: "ERROR", error: error });
//         console.log(error);
//       }
//     };

//     fetchComments();
//   }, []);

//   if (state.error) {
//     return <h1>An error occurred!</h1>;
//   }

//   return state.isFetching === true ? (
//     <PacmanLoader
//       color={"#4661E6"}
//       loading={state.isFetching}
//       cssOverride={override}
//       size={40}
//       aria-label="Loading Spinner"
//       data-testid="loader"
//     />
//   ) : (
//     <div className="bg-F7F8FD w-[355px] flex flex-col gap-7 p-4 m-auto md:w-max">
//       {state.request.map((request) => (
//         <Card
//           key={request._id}
//           tailwind={
//             "grid grid-rows-[100px_50px] grid-cols-2 gap-1 bg-FFFFFF text-[13px] relative p-5 md:flex md:flex-row md:gap-5"
//           }
//         >
//           <Card
//             key={request.id}
//             tailwind={
//               "bg-F2F4FF h-fit w-fit p-1 pr-3 pl-3 flex flex-row  gap-2 items-center justify-center md:flex-col"
//             }
//           >
//             <Votes votes={request.upvotes} title={request.title} />
//           </Card>
//           <div className="col-start-1 col-end-3 row-start-1 row-end-2 md:w-[80%]">
//             <h1 className="font-bold">{request.title}</h1>
//             <p>{request.description}</p>
//             <Card
//               tailwind={
//                 "flex gap-1 flex-row bg-F2F4FF w-fit p-1 pr-3 pl-3 mt-1 bg-F2F4FF text-z4661E6 font-semibold"
//               }
//             >
//               {request.category}
//             </Card>
//           </div>
//           <CommentsQuantity num={request.numCom} />
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default Comments;