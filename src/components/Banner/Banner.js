import React from "react";

export default function Banner() {
  return (
    <section className="section m-b-70">
      {/* <!-- Block Sliders (Layout 4) --> */}
      <div className="block block-sliders layout-4 auto-height color-white nav-center">
        <div
          className="slick-sliders"
          data-autoplay="true"
          data-dots="true"
          data-nav="true"
          data-columns4="1"
          data-columns3="1"
          data-columns2="1"
          data-columns1="1"
          data-columns1440="1"
          data-columns="1"
        >
          <div className="item slick-slide">
            <div className="item-content">
              <div className="content-image">
                <img
                  width="1920"
                  height="781"
                  src="media/slider/slider-01.jpeg"
                  alt="Image Slider"
                  className="mob-hid"
                />
                <img
                  src="media/slider/mob-slider-01.jpg"
                  alt="Image Slider"
                  className="mob-show"
                />
              </div>
              {/* <div className="item-info horizontal-center vertical-middle text-center">
                <div className="content">
                  <a
                    className="button-slider button button-white button-outline thick-border"
                    href="shop-grid-left.html"
                  >
                    Explore Bestseller
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="item slick-slide">
            <div className="item-content">
              <div className="content-image">
                <img
                  width="1920"
                  height="781"
                  src="media/slider/slider-02.jpeg"
                  alt="Image Slider"
                  className="mob-hid"
                />
                <img
                  src="media/slider/mob-slider-02.jpg"
                  alt="Image Slider"
                  className="mob-show"
                />
              </div>
              {/* <div className="item-info horizontal-center vertical-middle text-center">
                <div className="content">
                  <div className="subtitle-slider">Oh, Hello Newness!</div>
                  <h2 className="title-slider">MID YEAR SALE</h2>
                  <a
                    className="button-slider button button-white button-outline thick-border"
                    href="shop-grid-left.html"
                  >
                    Explore Bestseller
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <div className="item slick-slide">
            <div className="item-content">
              <div className="content-image">
                <img
                  width="1920"
                  height="781"
                  src="media/slider/slider-03.jpeg"
                  alt="Image Slider"
                  className="mob-hid"
                />
                <img
                  src="media/slider/mob-slider-03.jpg"
                  alt="Image Slider"
                  className="mob-show"
                />
              </div>
              {/* <div className="item-info horizontal-center vertical-middle text-center">
                <div className="content">
                  <div className="subtitle-slider">Best of the Best</div>
                  <h2 className="title-slider">MID YEAR SALE</h2>
                  <a
                    className="button-slider button button-white button-outline thick-border"
                    href="shop-grid-left.html"
                  >
                    Explore Bestseller
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
