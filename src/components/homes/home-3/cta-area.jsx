import React from "react";
import  Link  from 'next/link';

const CtaArea = () => {
  return (
    <>
      <div
        className="da-cta-section d-none d-lg-block wow tpfadeUp py-2"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div
            className="da-cta-area pt-45 pb-45"
            style={{ backgroundImage: `url(/assets/img/cta/da-pattern2.png)` }}
          >
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="da-cta-info ml-160">
                  <h4>
                    Sit Back, Relax, Grow: Let Us Unleash the Power of Our 360
                    <br />
                    AI-Marketing Help You Grow Effortlessly.
                  </h4>
                </div>
              </div>
              <div className="col-xl-4 d-none d-lg-block">
                <div className="da-cta-wraper mr-60 text-end">
                  <Link href="/contact" className="tp-grd-btn">
                    Get In Touch
                    <span className="ml-10">
                      <i className="fal fa-long-arrow-right"></i>
                      <i className="fal fa-long-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
