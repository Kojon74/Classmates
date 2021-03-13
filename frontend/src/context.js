import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { projectAuth, projectFirestore } from "./firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questionList, setQuestionList] = useState([]);
  const [activePost, setActivePost] = useState({});
  const [questionSelected, setQuestionSelected] = useState(false);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let history = useHistory();

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

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((authUser) => {
      setAuthLoading(false);
      if (authUser) {
        setIsLoggedIn(true);
        history.push("/course");
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

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
        isLoggedIn,
      }}
    >
      {!authLoading && children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
