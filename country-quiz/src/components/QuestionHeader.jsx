const QuestionHeader = ({ question, flag }) => {
  return (
    <div className="question__title">
      {question === "Which country does this flag belong to?" ? (
        <>
          <img src={flag} alt="country flag" />
          <h2>{question}</h2>
        </>
      ) : (
        <>
          <h2>{question}</h2>
        </>
      )}
    </div>
  );
};

export default QuestionHeader;
