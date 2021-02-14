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
  const {
    setActivePostId,
    setQuestionSelected,
    isNewQuestion,
    setIsNewQuestion,
  } = useGlobalContext();

  const handleSelectQuestion = () => {
    setQuestionSelected(true);
    setActivePostId(questionId);
    if (isNewQuestion) setIsNewQuestion(false);
  };

  return (
    <section className="question" onClick={handleSelectQuestion}>
      <h5 className="question-title">{questionTitle}</h5>
      <h6 className="question-user">{questionUser}</h6>
      <div className="border-bottom" />
    </section>
  );
};

export default Question;
