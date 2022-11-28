import React from "react";
function About() {
  return (
    <div>
      <p className="intro is-medium">About me
    </p>
      <hr />
      <img className="pic" src={process.env.PUBLIC_URL + '/img/cat.gif'} alt="cat flower circle"/>
      <p className="intro is-italic mt-4">
        Hello, I'm Julia. I'm a junior fullstack software developer and freelance digital artist currently attending at University of Minnesota Fulltime Coding Bootcamp.
      </p>
    </div>
    
  );
}

export default About;
