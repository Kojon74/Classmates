import React from "react";

const Answer = ({ answerId, answerText, answerUser, answerTime }) => {
  return (
    <section className="answer">
      <h5 className="user">{answerUser}</h5>
      <p className="answer-text">{answerText}</p>
    </section>
  );
};

export default Answer;
