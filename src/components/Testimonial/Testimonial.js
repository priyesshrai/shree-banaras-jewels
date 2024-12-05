import React from "react";

export default function Testimonial() {
  return (
    <section className="section section-padding background-img bg-img-2 m-b-70 p-t-140 p-b-70 m-t-n-130">
      <div className="section-container">
        {/* <!-- Block Testimonial --> */}
        <div className="block block-testimonial layout-2">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>What Our Customers Say</h2>
            </div>
            <div className="block-content">
              <div className="testimonial-wrap slick-wrap">
                <div
                  className="slick-sliders"
                  data-slidestoscroll="true"
                  // data-slidestoscroll="true"
                  data-nav="1"
                  data-dots="0"
                  data-columns4="1"
                  data-columns3="1"
                  data-columns2="1"
                  data-columns1="2"
                  data-columns="3"
                >
                  <div className="testimonial-content">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="testimonial-icon">
                          <div className="rating">
                            <div className="star star-5"></div>
                          </div>
                        </div>
                        <h2 className="testimonial-title">
                          “Amazing piece of history”
                        </h2>
                        <div className="testimonial-excerpt">
                          Blood bank canine teeth larynx occupational therapist
                          oncologist optician plaque spinal tap stat strep...
                        </div>
                      </div>
                      <div className="testimonial-image image-position-top">
                        <div className="thumbnail">
                          <img
                            width="110"
                            height="110"
                            src="media/testimonial/1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-info">
                          <h2 className="testimonial-customer-name">
                            Robet Smith
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="testimonial-icon">
                          <div className="rating">
                            <div className="star star-4"></div>
                          </div>
                        </div>
                        <h2 className="testimonial-title">
                          “Fabulous Grounds”
                        </h2>
                        <div className="testimonial-excerpt">
                          Blood bank canine teeth larynx occupational therapist
                          oncologist optician plaque spinal tap stat strep...
                        </div>
                      </div>
                      <div className="testimonial-image image-position-top">
                        <div className="thumbnail">
                          <img
                            width="110"
                            height="110"
                            src="media/testimonial/2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-info">
                          <h2 className="testimonial-customer-name">
                            Saitama One
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="testimonial-icon">
                          <div className="rating">
                            <div className="star star-5"></div>
                          </div>
                        </div>
                        <h2 className="testimonial-title">
                          “Great vineyard tour and tasting!”
                        </h2>
                        <div className="testimonial-excerpt">
                          Blood bank canine teeth larynx occupational therapist
                          oncologist optician plaque spinal tap stat strep...
                        </div>
                      </div>
                      <div className="testimonial-image image-position-top">
                        <div className="thumbnail">
                          <img
                            width="110"
                            height="110"
                            src="media/testimonial/3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-info">
                          <h2 className="testimonial-customer-name">
                            Sara Colinton
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="testimonial-icon">
                          <div className="rating">
                            <div className="star star-5"></div>
                          </div>
                        </div>
                        <h2 className="testimonial-title">“Stunning Design”</h2>
                        <div className="testimonial-excerpt">
                          Blood bank canine teeth larynx occupational therapist
                          oncologist optician plaque spinal tap stat strep...
                        </div>
                      </div>
                      <div className="testimonial-image image-position-top">
                        <div className="thumbnail">
                          <img
                            width="110"
                            height="110"
                            src="media/testimonial/4.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-info">
                          <h2 className="testimonial-customer-name">
                            Shetty Jamie
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
