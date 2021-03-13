import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { projectAuth } from "../../firebase";
import "./Auth.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    setError("");
    setLoading(true);
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) =>
        authUser.user.updateProfile({
          displayName: name,
        })
      )
      .catch((error) => {
        alert(error.message);
      });
    setLoading(false);
  };

  return (
    <section className="signup-page">
      <div className="border">
        <h2 className="header">Sign up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            Sign up
          </button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <Link className="login" to="login">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default Signup;
