import React, { useState } from "react";
import { useGlobalContext } from "../context";
import Answer from "./Answer";

const Post = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const { activePost } = useGlobalContext();

  const handleChange = (e) => {
    const newVal = e.target.value;
    setUserAnswer(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="post">
      <h2 className="title">{activePost.questionTitle}</h2>
      <p className="user">{activePost.questionUser}</p>
      <p className="text">{activePost.questionText}</p>
      <form className="your-answer" onSubmit={handleSubmit}>
        <label>Your Answer</label>
        <input type="text" value={userAnswer} onChange={handleChange}></input>
        <button className="submit">Post Answer</button>
      </form>
      {activePost.answers.map((answer) => {
        return <Answer {...answer} />;
      })}
    </section>
  );
};

export default Post;
