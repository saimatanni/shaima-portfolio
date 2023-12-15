import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                {/* <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div> */}
                <ProgressBar
                  animated
                  variant="success"
                  now={100}
                  label={`${100}%`}
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <ProgressBar
                  animated
                  variant="info"
                  now={80}
                  label={`${80}%`}
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">60%</i>
              </span>
              <div className="progress-bar-wrap">
                <ProgressBar
                  animated
                  variant="warning"
                  now={60}
                  label={`${60}%`}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                React JS <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
              <ProgressBar
                  animated
                  
                  now={70}
                  label={`${70}%`}
                />
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                React Redux <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
              <ProgressBar
                  animated
                  
                  now={70}
                  label={`${70}%`}
                />
              </div>
            </div>

          

            <div className="progress">
              <span className="skill">
                Next JS <i className="val">20%</i>
              </span>
              <div className="progress-bar-wrap">
              <ProgressBar
                  animated
                  variant="danger"
                  now={20}
                  label={`${20}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
