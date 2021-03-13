import React, { useState } from "react";
import { useGlobalContext } from "../../../context";
import Answer from "./Answer";
import { v4 as uuidv4 } from "uuid";
import { projectAuth } from "../../../firebase";

const Post = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const { activePost, addQuestionFirebase } = useGlobalContext();

  const handleChange = (e) => {
    const newVal = e.target.value;
    setUserAnswer(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (activePost === null) return;
    const answer = {
      answerId: uuidv4(),
      answerText: userAnswer,
      answerUser: projectAuth.currentUser.displayName,
      answerTime: new Date().getTime().toString(),
    };
    const answers = [...activePost.answers, answer];
    activePost.answers = answers;
    const question = { ...activePost };
    addQuestionFirebase(question);
    setUserAnswer("");
  };

  return (
    <section className="post">
      <h2 className="title">{activePost.questionTitle}</h2>
      <p className="user">{activePost.questionUser}</p>
      <p className="text">{activePost.questionText}</p>
      <form className="your-answer" onSubmit={handleSubmit}>
        <label>Your Answer</label>
        <textarea type="text" value={userAnswer} onChange={handleChange} />
        <button className="submit">Post Answer</button>
      </form>
      {activePost.answers.map((answer) => {
        return <Answer key={answer.answerId} {...answer} />;
      })}
    </section>
  );
};

export default Post;
