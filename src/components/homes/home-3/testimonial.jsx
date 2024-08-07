import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const testimonial_content = {
    title: "Testimonials",
    bg_img: "/assets/img/testimonial/da-testi-dot.png",
    users: "500",
    social_site: "Feedback"
}

const {title, bg_img , users, social_site}  = testimonial_content
// testimonial_data 

const testimonial_data = [
  {
    id: 1,
    img: "/assets/img/testimonial/russian.png",
    name: "Limbon N. Nelson",
    title: "CEO, Cascade Consulting",
    des: (
      <>
        “Devmate boosted our website traffic by 70% and, more importantly,
        generated a significant increase in qualified leads. Highly recommend
        them!. ”
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/testimonial/arab.png",
    name: "Omar Saleem",
    title: "Marketing Head, Mythos Design",
    des: (
      <>
        “Devmate transformed our social media presence! Customer engagement also
        improved significantly. Social media is now a key sales driver for our
        store. We couldn't be happier!”
      </>
    ),
  },

  {
    id: 3,
    img: "/assets/img/testimonial/chine.png",
    name: "Sarah M.",
    title: "CTO, Bewise Tech Inc.",
    des: (
      <>
        “We've seen a clear return on investment with increased website
        conversions and a sales boost. Their team is dedicated, transparent, and
        delivers results.”
      </>
    ),
  },

  {
    id: 4,
    img: "/assets/img/testimonial/indian.png",
    name: "Limbon N. Nelson",
    title: "Founder, Atlas Exploration ",
    des: (
      <>
        “ We were hesitant to switch agencies, but working with Devmate changed
        our minds! Their collaborative spirit makes the entire process smooth
        and enjoyable. They've exceeded expectations! ”
      </>
    ),
  },
];

// slider setting 
const setting  = {
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    pagination: {
        el: ".da-testi-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".da-testi-button-next",
        prevEl: ".da-testi-button-prev",
    },

}


const Testimonial = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div
        className="da-testimonial bg-black pt-120 pb-120 wow tpfadeUp"
        data-wow-delay=".3s"
       
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0">
                     
                   {title}
                  </span>
                  <h2 className="tp-section__title text-white mb-30 black-line">
                    {users}+ User
                    <b className="text-red-700"> {social_site}</b> 
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12 p-relative">
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="swiper-container da-testi-active"
              >
                {testimonial_data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-12">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="da-testi-avata p-relative">
                              <img
                                src={item.img}
                                alt={item.name}
                              />
                              {/* <div className="da-testi-icon">
                                <i className="fas fa-quote-left"></i>
                              </div> */}
                            </div>
                          </div>
                          <div className="col-12 col-md-9">
                            <div className="da-testi ml-40">
                              <span className="text-red-700 space-x-2 flex d-inline-block mb-10">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                              <p className="da-testi__review mb-40">
                                {item.des}
                              </p>
                              <div className="da-testi__meta">
                                <h3 className="da-testi__reviewer-name">
                                  
                                   {item.name}
                                </h3>
                                <span> {item.title}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="da-testi-navigation d-none d-md-block">
                <div className="da-testi-button-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="da-testi-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
