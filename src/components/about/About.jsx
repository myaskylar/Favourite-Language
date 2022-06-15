import React, { useState } from "react";
import Search from "../search/Search";
import "./about.css";
import { GiThink } from "react-icons/gi";

const About = () => {
  //set state to highest repeated used language in all repos.
  const [favLanguage, setFavLanguage] = useState(["language"]);

  return (
    <section>
      <div className="container about__container">
        <div className="about__content">
          <p>
            Enter GitHub username to find out GitHub user's favorite / most
            frequently used programming language.
          </p>
          <Search setFavLanguage={setFavLanguage} />
        </div>

        <div className="about__lang">
          <div className="about__lang-image">
            <div className="about__lang-result">
              {favLanguage ? (
                <p>{favLanguage[0]}</p>
              ) : (
                <GiThink className="about__lang-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
