import React from "react";
import { useGlobalContext } from "../context";

const Question = ({
  questionId,
  questionTitle,
  questionText,
  questionUser,
  questionTime,
  answers,
}) => {
  const { setActivePostId } = useGlobalContext();
  return (
    <section className="question" onClick={() => setActivePostId(questionId)}>
      <h4 className="question-title">{questionTitle}</h4>
    </section>
  );
};

export default Question;
