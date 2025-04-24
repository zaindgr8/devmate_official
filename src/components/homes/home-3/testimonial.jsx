import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const testimonial_content = {
  title: "Success Stories",
  bg_img: "/assets/img/testimonial/da-testi-dot.png",
  users: "500",
  social_site: "Feedback",
};

const {title, bg_img , users, social_site}  = testimonial_content
// testimonial_data 

const testimonial_data = [
  {
    id: 1,
    img: "/assets/img/testimonial/1.png",
    name: "Hussain Mousa",
    title: "MEA Director, Finaxe 🇬🇧",
    des: (
      <>
        “Devmate Solutions revamped our Finaxe website with improved design and
        functionality. They were highly professional, delivered on time, and
        exceeded expectations. Highly recommend!”
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/testimonial/2.png",
    name: "Iman Bourdouf",
    title: "CEO/ Founder, Art Of Living By Iman 🇫🇷",
    des: (
      <>
        “They took my brand from scratch and completely transformed it—handling
        everything from branding and social media to designing and developing an
        incredible website with stunning interactivity and animations. The
        entire team was cooperative and professional, making the collaboration
        an absolute pleasure. Thank you, Zain Ul Abideen and his amazing team at
        Devmate Solutions!”
      </>
    ),
  },

  {
    id: 3,
    img: "/assets/img/testimonial/3.png",
    name: "Umer Shauket",
    title: "CEO, CRESCO Real Estate 🇦🇪",
    des: (
      <>
        “They delivered an exceptional Next.js website for our real estate
        company, managed our social media, and ran highly effective ad campaigns
        that generated quality leads, resulting in sales. Professional,
        efficient, and results-driven—truly outstanding work!”
      </>
    ),
  },
  {
    id: 4,
    img: "/assets/img/testimonial/5.png",
    name: "Wissam Serdoun",
    title: "Founder, Wissam By Wissam Perfumes | Hedone Access 🇫🇷 🇦🇪",
    des: (
      <>
        “Devmate Solutions handled everything for both of my startups—Hedone
        Access and Wissam by Wissam. From branding and web development to social
        media and ad campaigns, they took care of it all like true professionals
        and helped my brands gain valuable recognition. Truly a seamless
        experience!”
      </>
    ),
  },

  {
    id: 5,
    img: "/assets/img/testimonial/4.png",
    name: "Humood Al Adhari",
    title: "CEO, Alwala Real Estate 🇴🇲",
    des: (
      <>
        “Devmate handled the rebranding of our social media, created our
        website, and continues to work with us. It's been an amazing experience
        collaborating with such a professional team!”
      </>
    ),
  },

  {
    id: 6,
    img: "/assets/img/testimonial/6.png",
    name: "Murtaza Al Omani",
    title: "Executive Search & Talent Acquisition, Okerasyn 🇬🇧",
    des: (
      <>
        “We needed branding for our company along with improvements and new
        functionalities on our website, and Devmate Solutions delivered it all
        perfectly. They exceeded our expectations with their professionalism and
        attention to detail.”
      </>
    ),
  },
  {
    id: 7,
    img: "/assets/img/testimonial/7.png",
    name: "Ayaz Momin",
    title: "CEO, Thread & Beams 🇺🇸",
    des: (
      <>
        "I was looking for a 3D website for my architecture company, and Zain
        suggested a 3js website. They delivered it on time with excellent
        communication and cooperation throughout the process. Truly impressed
        with their work!"
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
                    Hear from
                    <b className="text-red-700"> Our Clients</b>
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
                              <img src={item.img} alt={item.name} />
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
              <div className="da-testi-navigation d-block">
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
