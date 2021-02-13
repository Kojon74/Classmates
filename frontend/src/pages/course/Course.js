import React from "react";
import QuestionList from "./components/QuestionList";
import Post from "./components/Post";
import { AppProvider } from "./context";
import "./Course.css";

const Course = () => {
  return (
    <AppProvider>
      <section className="course">
        <QuestionList />
        <Post />
      </section>
    </AppProvider>
  );
};

export default Course;
