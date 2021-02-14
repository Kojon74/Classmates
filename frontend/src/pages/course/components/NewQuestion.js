import React, { useState } from "react";
import { useGlobalContext } from "../context";

const NewQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { setIsNewQuestion } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="new-question">
      <div className="header">
        <button className="cancel" onClick={() => setIsNewQuestion(false)}>
          Cancel
        </button>
        <h3 className="title">New Question</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input1-container">
          <label>Title</label>
          <input
            className="input-title"
            id="title"
            type="text"
            value={questionTitle}
            onChange={(e) => {
              setQuestionTitle(e.target.value);
            }}
          />
        </div>
        <textarea
          className="input-text"
          id="text"
          type="text"
          value={questionText}
          onChange={(e) => {
            setQuestionText(e.target.value);
          }}
        />
        <button className="submit" type="submit">
          Post
        </button>
      </form>
    </section>
  );
};

export default NewQuestion;
