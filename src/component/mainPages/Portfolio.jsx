import React from "react";
import portfolio from "../../assets/img/portfolio/portfolio-9.jpg";
import portfolio1 from "../../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../../assets/img/portfolio/portfolio-4.jpg";
import portfolio6 from "../../assets/img/portfolio/portfolio-6.jpg";
import portfolio7 from "../../assets/img/portfolio/portfolio-7.jpg";
import portfolio8 from "../../assets/img/portfolio/portfolio-8.jpg";
import portfolio5 from "../../assets/img/portfolio/portfolio-5.jpg";
const Portfolio = () => {
  const portfoioList = [
    {
      img: portfolio1,
      link: "https://partneruat.paymentsave.co.uk/login",
    },
    {
      img: portfolio2,
      link: "https://onboardinguat.paymentsave.co.uk/",
    },
    {
      img: portfolio6,
      link: "https://admin.menubookbd.com/",
    },
    {
      img: portfolio3,
      link: "https://epos.demo.devsstream.com/",
    },
    {
      img: portfolio7,
      link: "https://qhi.demo.devsstream.com/dashboard",
    },
    {
      img: portfolio8,
      link: "https://ialo.com.bd/",
    },
    {
      img: portfolio,
      link: "https://shancafe.net/",
    },
    // {
    //   img: portfolio1,
    //   link: "https://partneruat.paymentsave.co.uk/login",
    // },
    // {
    //   img: portfolio1,
    //   link: "https://partneruat.paymentsave.co.uk/login",
    // },
  ];
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        {/* <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfoioList.map((item, i) => {
            return (
              <div
                key={i}
                className="col-lg-4 col-md-6 portfolio-item filter-app"
              >
                <div className="portfolio-wrap">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt=""
                    style={{ height: "300px", width: "100%" }}
                  />
                  <div className="portfolio-links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
