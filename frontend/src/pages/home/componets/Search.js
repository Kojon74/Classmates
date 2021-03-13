import React from "react";
import { useHistory } from "react-router";

const Search = () => {
  let history = useHistory();

  const handleSubmit = () => {
    history.push("/signup");
  };

  return (
    <section className="search">
      <h4 className="header">Search Courses</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>University</label>
          <select id="university" className="dropdown">
            <option value="University of Alberta">University of Alberta</option>
            <option value="University of British Columbia">
              University of British Columbia
            </option>
            <option value="University of Toronto">University of Toronto</option>
            <option value="University of Waterloo">
              University of Waterloo
            </option>
          </select>
        </div>
        <div className="input-container">
          <label>Course</label>
          <select id="course" className="dropdown">
            <option value="CPSC 320">CPSC 320</option>
            <option value="CPSC 340">CPSC 340</option>
            <option value="MATH 301">MATH 301</option>
            <option value="PHYS 256">PHYS 256</option>
          </select>
        </div>
        <button className="auth-link signup" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Search;
