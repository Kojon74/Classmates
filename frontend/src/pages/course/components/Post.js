import React from "react";
import { useGlobalContext } from "../context";

const Post = () => {
  const { activePost } = useGlobalContext();

  return (
    <section className="post">
      <h2 className="title">{activePost.questionTitle}</h2>
      <p className="text">{activePost.questionText}</p>
      <p className="user">{activePost.questionUser}</p>
    </section>
  );
};

export default Post;
