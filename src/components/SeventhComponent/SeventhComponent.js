import React from "react";

export default function SeventhComponent() {
  return (
    <section className="section section-padding">
      <div className="section-container large">
        {/* <!-- Block Banners (Layout 2) --> */}
        <div className="block block-banners layout-2 banners-effect">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="block-widget-banner m-b-15">
                  <div className="bg-banner">
                    <div className="banner-wrapper banners">
                      <div className="banner-image">
                        <a href="#">
                          <img
                            width="856"
                            height="496"
                            src="media/seventh-component/01.jpeg"
                            alt="Banner Image"
                          />
                        </a>
                      </div>
                      <div className="banner-wrapper-infor">
                        <div className="info">
                          <div className="content">
                            <h3 className="title-banner">New Arrivals</h3>
                            <div className="banner-image-description">
                            Sleek diamond rings and stunning bangles
                            </div>
                            <a
                              className="button button-outline thick-border border-white button-arrow"
                              href="shop-grid-left.html"
                            >
                              Explore
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="block-widget-banner">
                  <div className="bg-banner">
                    <div className="banner-wrapper banners">
                      <div className="banner-image">
                        <a href="#">
                          <img
                            width="856"
                            height="496"
                            src="media/seventh-component/02.jpeg"
                            alt="Banner Image"
                          />
                        </a>
                      </div>
                      <div className="banner-wrapper-infor">
                        <div className="info">
                          <div className="content">
                            <h3 className="title-banner">Timeless Diamond Elegance</h3>
                            <div className="banner-image-description">
                            Sparkling diamond necklaces and bracelets
                            </div>
                            <a
                              className="button button-outline thick-border border-white button-arrow"
                              href="shop-grid-left.html"
                            >
                              Explore
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
