function StartText({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Wellcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "dataActivated" })}
      >
        Let's go
      </button>
    </div>
  );
}

export default StartText;
