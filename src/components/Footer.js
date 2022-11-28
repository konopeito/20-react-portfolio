import React from "react";
import divider from '../assets/divider.gif'

function Footer() {
  return (
    <footer className="footer">
      <div className="intro has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/JFritsch04" target="_blank" rel="noreferrer">
            Julia Fritsch
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/julia-fritsch-919aab23a/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
            
          </a>
        </p>
      </div>
      <img className="divider" src={divider} alt="divider" />
    </footer>
  );
}

export default Footer;