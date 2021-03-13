import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Welcome from "./componets/Welcome";
import Search from "./componets/Search";
import "./Home.css";

const Home = () => {
  const [showUniError, setShowUniError] = useState(false);
  const [showCourseError, setShowCourseError] = useState(false);
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  return (
    <section className="home">
      <Welcome />
      <Search />
    </section>
  );
};

export default Home;
