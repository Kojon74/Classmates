import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { v4 as uuidv4 } from "uuid";

const NewQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { setIsNewQuestion, addQuestionFirebase } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const question = {
      questionId: id,
      questionTitle,
      questionText,
      questionUser: "user1",
      questionTime: new Date().getTime().toString(),
      answers: [],
    };
    addQuestionFirebase(question);
    setIsNewQuestion(false);
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
