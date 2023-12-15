import React from 'react'
import portfolioImg from '../../assets/img/profile-img.jpg'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I have so much interest in Software Development specially Web Development. 
            I always enjoy developing web application. Being a technically focused person,
             I want to continue my learning process by gaining practical experience,
             for that reason I want to progress my career as a software engineer.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={portfolioImg}className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Programmer &amp; Web Developer.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 March 1996</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>01955770873</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Savar, Dhaka</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Honours</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>saimatanni60@gmail.com</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About