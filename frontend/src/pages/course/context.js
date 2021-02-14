import React, { useState, useContext } from "react";
import { projectFirestore } from "../../firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questionList, setQuestionList] = useState([]);
  const [activePost, setActivePost] = useState({});
  const [questionSelected, setQuestionSelected] = useState(false);
  const [isNewQuestion, setIsNewQuestion] = useState(false);

  const setActivePostId = (id) => {
    const matchingIdQ = questionList.find(
      (question) => question.questionId === id
    );
    setActivePost(matchingIdQ);
  };

  const addQuestionFirebase = (question) => {
    projectFirestore
      .collection("questions")
      .doc(question.questionId)
      .set({ ...question })
      .catch((error) => {
        console.log(error);
      });
  };

  // const AddAnswerFirebase = (questionId, answer);

  return (
    <AppContext.Provider
      value={{
        setQuestionList,
        activePost,
        setActivePostId,
        questionSelected,
        setQuestionSelected,
        isNewQuestion,
        setIsNewQuestion,
        addQuestionFirebase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
