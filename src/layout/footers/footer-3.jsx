import React from 'react';
import CommonFooter, { FooterCopyRight } from './common-footer';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const footer_3_content ={
    subscribe: "Subscribe Now",
    title: "Subscribe to get the latest news from us"
}

const {subscribe, title} = footer_3_content


const FooterThree = ({style_4}) => {
    return (
      <>
        <footer>
          <div
            className={`bs-footer da-footer-bg ${
              style_4 ? "p-relative" : "da-footer"
            } `}
          >
            <div className="container">
              <div
                className={`bs-footer__main pb-10 pt-80 ${
                  style_4 ? "z-index-11 p-relative" : ""
                }`}
              >
                <div className="row justify-content-center">
                  {/* <CommonFooter />                      */}
                  <div className="col-xl-3 col-md-6">
                    <div className="tp-footer__widget mb-40">
                      <h3 className="tp-footer__widget-title mb-35">
                        Get In Touch
                      </h3>
                      <div className="tp-footer-cta d-flex align-items-center mb-30">
                        <span className="call-icon">
                          {/* <img
                            src="/assets/img/footer/footer-rbg-call.png"
                            alt=""
                          /> */}
                          {/* <FaPhoneAlt /> */}
                        </span>
                        <span>
                          <span className="d-block mb-0">
                            Business Bay, Dubai
                          </span>
                          <b>
                            <a href="callto:+971585984869">
                              Call Us: +971 58 598 4869{" "}
                            </a>
                          </b>
                        </span>
                      </div>
                      <div className="tp-footer-cta d-flex align-items-center mb-30">
                        <span className="call-icon">
                          {/* <img
                            src="/assets/img/footer/message-rgb-ison.png"
                            alt=""
                          /> */}
                        </span>
                        <span>
                          <span className="d-block mb-0">
                            24/7 Customer Support
                          </span>
                          <b>
                            <a href="mailto:info@gencio.com">
                              info@devmatesolutions.com
                            </a>
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="tp-footer__widget bs-pl-60 mb-40">
                      <h3 className="tp-footer__widget-title mb-35">
                        {subscribe}
                      </h3>
                      <p> {title}</p>

                      <div className="tp-footer-from mb-5 p-relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <span>
                            <i className="fas fa-envelope-open"></i>
                          </span>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </form>
                      </div>

                      <div className="da-ft-social">
                        <b> Connect Here:</b>
                        <span className="text-red-700">
                          <a
                            target="_blank"
                            href="https://www.facebook.com/devmatesolutions"
                          >
                            <i  className="fab fa-facebook-f text-red-700"></i>
                          </a>
                        </span>
                        <span>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/devmatesolutions/"
                          >
                            <i className="fab fa-instagram text-red-700"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterCopyRight style_3={true} />
            </div>
            {style_4 && (
              <div className="bs-footer__circle d-none d-lg-block"></div>
            )}
          </div>
        </footer>
      </>
    );
};

export default FooterThree;