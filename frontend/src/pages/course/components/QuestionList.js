import React from "react";
import Question from "./Question";
import data from "../../../data";

const QuestionList = () => {
  return (
    <section className="question-list">
      {data.map((question) => {
        return <Question {...question} />;
      })}
    </section>
  );
};

export default QuestionList;
