import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const HeroAboutMe = () => {
    return (
      <>
        <div
          className="tp-about__me  pt-5"
          style={{
            backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg.png)`,
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-5 wow tpfadeUp">
                <div
                  className="about-me-1 mb-30"
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
                    <img src="/assets/img/about/mee.jpg" alt="" />
                  </Tilt>
                </div>
              </div>
              <div className="col-md-6 wow tpfadeUp">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <span className="tp-section__subtitle shadow-none text-[#B91C1B] mb-10 p-0">
                      Message from the CEO
                    </span>
                    <h2 className="tp-section__title mb-20">
                      Zain Ul Abideen Baloch
                    </h2>
                    <p className="mb-0 pb-40">
                      "At DEVMATE Solutions, we value passion over perfection &
                      hires accordignly. We started as a service-based
                      but aim to launch solution-orietned and SAAS products. Our goal is to
                      reach a company valuation of $1 billion by 2029 and create
                      over 10,000+ jobs by 2027. We always adopt new
                      technologies to work more efficiently and stay current.
                      Join us and be part of this digital revolution today."
                    </p>
                  </div>
                  <div className="about-me-socials">
                    <div className="flex gap-x-2 space-x-2 w-[4vh] ">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroAboutMe;