function StartText({ numQuestions }) {
  return (
    <div className="start">
      <h2>Wellcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React master</h3>
      <button className="btn btn-ui">Let's go</button>
    </div>
  );
}

export default StartText;
