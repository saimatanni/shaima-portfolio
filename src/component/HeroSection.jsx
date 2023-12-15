import React from "react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Shaima Alam Tanni</h1>
          <p>
            I'm{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Designer.",
                1000,
                "Programmer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
