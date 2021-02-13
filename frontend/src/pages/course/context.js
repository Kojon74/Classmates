import React, { useState, useContext } from "react";
import data from "../../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questionList, setQuestionList] = useState(data);
  const [activePost, setActivePost] = useState({});

  const setActivePostId = (id) => {
    const matchingIdQ = questionList.find(
      (question) => question.questionId === id
    );
    setActivePost(matchingIdQ);
  };

  return (
    <AppContext.Provider value={{ activePost, setActivePostId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
