import React from "react";

const Resumie = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Shaima Alam Tanni</h4>
              <p>
                <em>
                  Experienced React Developer with a track record of innovation
                  and meeting deadlines, bringing 1.5+ years of expertise in
                  designing and developing user-centric digital/print marketing
                  materials from the initial concept to the final polished
                  deliverable.
                </em>
              </p>

              <ul>
                <li>Chayabithi, Savar, Dhaka</li>
                <li>01955770873</li>
                <li>saimatanni60@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>
                Bachelor of Science (BSc) in Computer Science &amp; Engineering
                (CSE){" "}
              </h4>
              <h5>2016 - 2020</h5>
              <p>
                <em>United International University, Dhaka</em>
              </p>
              <p>CGPA : 3.20</p>
            </div>
            {/* <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>CGPA : 3.20</p>
            </div> */}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Front-End Developer</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>
                  <a
                    href="https://devsstream.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Devsstream Limited, Mirpur, Dhaka{" "}
                  </a>{" "}
                </em>
              </p>
              <ul>
                <li>
                  Lead in the development, and implementation of the UI design,
                  layout, and production communication materials
                </li>
                <li>
                  Collaborate with cross-functional teams, including designers,
                  product managers, and other developers.{" "}
                </li>
                <li>
                  Work closely with team members to understand project
                  requirements and specifications
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Intern Fornt-End Developer</h4>
              <h5>2021</h5>
              <p>
                <em>
                  {" "}
                  <a
                    href="https://ghuriexpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ghuriexpress Limited, Baridhara DOHS, Dhaka{" "}
                  </a>{" "}
                </em>
              </p>
              <ul>
                <li>
                  Responsive design and Api integration in Ghuri admin panel,
                  Ghuri bazar website using react bootstrap, react js, react
                  hooks and redux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumie;
