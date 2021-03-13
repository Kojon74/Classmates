import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { projectAuth } from "../../firebase";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("Signin");
    e.preventDefault();
    setError("");
    setLoading(true);
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setError(err));
    setLoading(false);
  };

  return (
    <section className="signup-page">
      <div className="border">
        <h2 className="header">Log in</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            Log in
          </button>
        </form>
      </div>
      <p>
        Don't have an account yet?{" "}
        <Link className="login" to="signup">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default Login;
