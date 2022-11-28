import React from "react";
import paw from '../assets/paw.gif'
import star from '../assets/star.gif'

function Project(props) {
  return (
    <div>
      {/* Image & Column Format */}
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + project.image} alt="placeholder" />
                  </a>
                </figure>
              </div>
              {/* Card Content Format */}
              <div className="card-content">
                <div className="cards">
                  <div className="card-left"></div>
                  <div className="card-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>
                {/*Info/Content Within Card  */}
                <div className="intro has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="intro is-family-code">
                    Languages: {project.languages}
                    <br />
                    Technology: {project.technology}
                  </div>
                  <div className="card">
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Github Repos <img className="star" src={star} alt="yellow star sparkle" />
                      </a>
                      <br />

                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Deployed Site  <img className="paw" src={paw} alt="pink paw" />
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;