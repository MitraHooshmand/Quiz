import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartText from "./StartText.js";
import Questions from "./Questions.js";
// import { type } from "@testing-library/user-event/dist/type/index.js";
const initialState = { questions: [], status: "loading", index: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed": {
      return { ...state, status: "error" };
    }
    case "dataActivated": {
      return { ...state, status: "active" };
    }
    default:
      throw new Error("Action is unknown");
  }
}
export default function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartText numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Questions question={questions[index]} />}
      </Main>
    </div>
  );
}