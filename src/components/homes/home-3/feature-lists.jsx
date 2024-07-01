import React from "react";

// feature_data
const feature_data = [
  {
    id: 1,
    title: "5+ Years Of Excellence",
    duration: "1000",
  },
  {
    id: 2,
    title: "Highly Skilled Professionals",
    duration: "1500",
  },
  {
    id: 3,
    title: "AI-Driven Rapid Solutions",
    duration: "2000",
  },
  {
    id: 4,
    title: "24/7 Online Support",
    duration: "2500",
  },
];


const FeatureLists = () => {
  return (
    <>
      <div className="bg-red-700 pt-20">
        <div className="container">
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div
                  className="da-feature-item-top mb-20"
                  data-aos="fade-up"
                  data-aos-duration={item.duration}
                >
                  <span>
                    <i className="fal fa-check"></i>
                  </span>
                  <b className="text-white">{item.title}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureLists;
