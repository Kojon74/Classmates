import React from "react";
import QuestionList from "./components/QuestionList";
import Post from "./components/Post";
import { useGlobalContext } from "../../context";
import "./Course.css";
import NewQuestion from "./components/NewQuestion";

const Course = () => {
  const { questionSelected, isNewQuestion } = useGlobalContext();
  return (
    <section className="course">
      <QuestionList />
      {isNewQuestion ? (
        <NewQuestion />
      ) : questionSelected ? (
        <Post />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Course;
