import React from 'react';
import Tilt from 'react-parallax-tilt';

import Link  from "next/link";
const portfolio_data = [
  {
    id: 1,
    title: "My Dent Ai 🇺🇸",
    hover_img: "/assets/img/portfolio/5.svg",
    cls: "mp-portfolio-btn",
    link: "http://mydent.ai/",
  },
  {
    id: 2,
    title: "Finaxe 🇬🇧",
    hover_img: "/assets/img/portfolio/1.svg",
    cls: "mp-portfolio-btn",
    link: "https://finaxe.com/",
  },
  {
    id: 3,
    title: "Art of Living by Iman 🇫🇷",
    hover_img: "/assets/img/portfolio/2.svg",
    cls: "mp-portfolio-btn",
    link: "https://www.artoflivingbyiman.com/",
  },
  {
    id: 4,
    title: "Alwala Real Estate 🇴🇲",
    hover_img: "/assets/img/portfolio/3.svg",
    cls: "mp-portfolio-btn",
    link: "https://alwalaaoman.com/",
  },
];

const Portfolio = () => {
    return (
      <>
        <div className="mp-portfolio fix">
          <div className="container">
            <span className="tp-section__subtitle mb-5 shadow-none text-grey p-0 mt-20">
              Our Success Stories
            </span>
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className="mp-portfolio-item d-flex justify-content-between align-items-center p-relative"
              >
                <div className="mp-portfolio-info wow tpfadeUp wow tpfadeUp">
                  <h3 className="mp-portfolio-title">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div
                    className="mp-portfoio-img p-relative"
                    data-tilt=""
                    data-tilt-perspective="2000"
                  >
                    <Tilt
                      className="tilt-img"
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      perspective={900}
                      transitionSpeed={1000}
                      gyroscope={true}
                    >
                      <img src={item.hover_img} alt={item.title} />
                      {/* <a href="" className="mp-pt-btn">
                        <i className="fal fa-long-arrow-right"></i>
                      </a> */}
                    </Tilt>
                  </div>
                </div>
                {/* <div className={`${item.cls} wow tpfadeUp`}>
                  <span>
                    <a href="#">Social Media</a>
                  </span>
                  <span>,</span>
                  <span>
                    <a href="#">Website</a>
                  </span>
                </div> */}
              </div>
            ))}
            <div className="mp-pt-btn-wrapper text-center pt-60 wow tpfadeUp">
              <Link
                href="/portfolio-2"
                className="tp-border-btn br-btn-bg-dark border-radious-none tp-btn-hover alt-black-color"
              >
                More Works
                <span className="ml-10">
                  <i className="fal fa-long-arrow-right"></i>
                  <i className="fal fa-long-arrow-right"></i>
                </span>
                <b></b>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Portfolio;