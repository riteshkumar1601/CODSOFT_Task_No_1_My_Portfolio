import React from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { useRef } from "react";

export const WorkExperience = () => {
  const slideRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="arrow-right" onClick={slideRight}>
        <span className="material-symbols-outlined">=</span>
      </div>
      <div className="arrow-left" onClick={slideLeft}>
        <span className="material-symbols-outlined">=</span>
      </div>

      <div className="experience-content">
        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item}></ExperienceCard>
          ))}
        </Slider>
      </div>
    </section>
  );
};
