import React from "react";
import Question from "./Question";
import data from "../../../data";
import { useGlobalContext } from "../context";

const QuestionList = () => {
  const { setIsNewQuestion } = useGlobalContext();
  return (
    <section className="question-list">
      <button className="new-q" onClick={() => setIsNewQuestion(true)}>
        New Question
      </button>
      {data.map((question) => {
        return <Question {...question} />;
      })}
    </section>
  );
};

export default QuestionList;
