import React from "react";
import Question from "./Question";
// import data from "../../../data";
import { useGlobalContext } from "../context";
import useFirestore from "../../../useFirestore";

const QuestionList = () => {
  const { setIsNewQuestion } = useGlobalContext();
  const { docs } = useFirestore("questions");

  return (
    <section className="question-list">
      <button className="new-q" onClick={() => setIsNewQuestion(true)}>
        New Question
      </button>
      <div className="questions-container">
        {docs.map((question) => {
          return <Question key={question.questionId} {...question} />;
        })}
      </div>
    </section>
  );
};

export default QuestionList;
