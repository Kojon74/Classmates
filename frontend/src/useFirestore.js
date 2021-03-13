import { useState, useEffect } from "react";
import { projectFirestore } from "./firebase";
import { useGlobalContext } from "./context";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  const { setQuestionList } = useGlobalContext();

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("questionTime", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setQuestionList(documents);
      });
    return () => unsub();
  }, [collection, setQuestionList]);
  return { docs };
};
export default useFirestore;
