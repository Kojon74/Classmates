import React from "react";
import { ReactComponent as HomeSvg } from "../../../assets/undraw_social_friends_nsbv.svg";

const Welcome = () => {
  return (
    <section className="welcome">
      <h3 className="slogan">
        Meeting your classmates online, <br /> and start collaborating now!
      </h3>
      <HomeSvg className="illustration" />
    </section>
  );
};

export default Welcome;
