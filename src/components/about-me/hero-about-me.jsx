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
                    <img src="/assets/img/about/me1.png" alt="" />
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
                      "At Devmate Solutions, we are proud to serve clients
                      across Europe, the USA, and the GCC in a variety of
                      industries.
                      <br /> Our core values—professionalism, commitment, and
                      collaboration—drive everything we do. <br />
                      We treat our clients' projects as our own, delivering
                      cutting-edge solutions with a personal touch. <br />
                      As we look to the future, we are excited to develop unique
                      AI automation solutions and launch innovative startups.
                      <br />
                      Staying ahead in a rapidly changing world, we ensure our
                      services remain efficient, effective, and up-to-date.
                      Let’s build the future together!"
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