import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeSvg } from "../../../assets/undraw_social_friends_nsbv.svg";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="left">
        <h3 className="slogan">
          Meet your classmates online, <br /> and start collaborating now!
        </h3>
        <Link className="auth-link signup" to="/signup">
          Join now
        </Link>
      </div>
      <HomeSvg className="illustration" />
    </section>
  );
};

export default Welcome;
