import React from "react";

export default function ThirdComponent() {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container large">
        {/* <!-- Block Banners (Layout 1) --> */}
        <div className="block block-banners layout-1 banners-effect">
          <div className="block-widget-wrap small-space">
            <div className="row">

              <div className="section-column left sm-m-b">
                <div className="block-widget-banner">
                  <div className="bg-banner">
                    <div className="banner-wrapper banners">
                      <div className="banner-image">
                        <a href="#">
                          <img
                            width="630"
                            height="457"
                            src="media/third-component/01.jpeg"
                            alt="Banner Image"
                          />
                        </a>
                      </div>
                      <div className="banner-wrapper-infor">
                        <div className="info">
                          <div className="content">
                            <h3 className="title-banner text-light">Fresh Picks</h3>
                            <a className="button text-light" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-column center sm-m-b">
                <div className="block-widget-banner">
                  <div className="bg-banner">
                    <div className="banner-wrapper banners">
                      <div className="banner-image">
                        <a href="#">
                          <img
                            width="450"
                            height="457"
                            src="media/third-component/02.jpeg"
                            alt="Banner Image"
                          />
                        </a>
                      </div>
                      <div className="banner-wrapper-infor text-center">
                        <div className="info">
                          <div className="content">
                            <h3 className="title-banner text-light">Top Trends</h3>
                            <a className="button center text-light" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-column right">
                <div className="block-widget-banner">
                  <div className="bg-banner">
                    <div className="banner-wrapper banners">
                      <div className="banner-image">
                        <a href="#">
                          <img
                            width="630"
                            height="457"
                            src="media/third-component/03.jpeg"
                            alt="Banner Image"
                          />
                        </a>
                      </div>
                      <div className="banner-wrapper-infor">
                        <div className="info">
                          <div className="content">
                            <h3 className="title-banner text-light">Now Trending</h3>
                            <a className="button text-light" href="#">
                              Shop Now
                            </a>
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
      </div>
    </section>
  );
}
