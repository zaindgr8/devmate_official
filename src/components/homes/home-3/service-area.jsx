import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";



// service_data
const service_data = [
  {
    id: 1,
    counter: "01",
    title: (
      <>
        Web & App <br /> Development
      </>
    ),
    des: (
      <>
        Transform your ideas into reality with our cutting-edge Web and App (IOS
        & Android) development services.
      </>
    ),
    delay: ".4s",
    list_item: [
      "Custom Solutions",
      "Responsive Design",
      "Scalable Architecture",
      "Advanced Technologies",
    ],
  },
  {
    id: 2,
    counter: "02",
    title: (
      <>
        {" "}
        Ecommerce <br /> Development
      </>
    ),
    des: (
      <>
        From user-friendly storefronts to secure payment gateways, we provide
        everything you need to sell online.
      </>
    ),
    delay: ".5s",
    list_item: [
      "Custom Storefronts",
      "Secure Payment Integration",
      "Optimized for Sales",
      "Inventory Management",
    ],
  },
  {
    id: 3,
    counter: "03",
    title: (
      <>
        SEO & <br /> Ad Campaigns
      </>
    ),
    des: (
      <>
        Enhance Digital presence through strategic optimization and paid
        Advertising Campaigns.
      </>
    ),
    delay: ".5s",
    list_item: [
      "Rank in top Google Pages",
      "Reach Target Audience",
      "Social Media Marketing",
      "Generate Quality Leads",
    ],
  },
];



const ServiceArea = () => {
  return (
    <>
      <div className="pt-20 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp ">
                    Our Services
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Service We <b className="">Provide</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className="da-service pr-30 pl-30 mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <h3 className="da-service__title ">{item.title}</h3>
                    <div className="da-service__counter">{item.counter}</div>
                  </div>

                  <div className="da-service__list-box white-bg">
                    <p>{item.des}</p>
                    <ul>
                      {item.list_item.map((list, i) => (
                        <li key={i}>
                          {list}
                          <span>
                            <FaRegCircleCheck className="text-red-700" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
