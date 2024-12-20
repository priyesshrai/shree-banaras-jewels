import React from "react";

export default function SixthComponent() {
  return (
    <section className="section section-padding top-border p-t-70 m-b-70">
      <div className="section-container">
        {/* <!-- Block Intro (Layout 3) --> */}
        <div className="block block-intro layout-3">
          <div className="block-widget-wrap">
            <div className="row">
              <div className="section-column left">
                <div className="intro-wrap">
                  <h2 className="intro-title black">
                    Jewellery Online
                    <br /> at the Most Affordable Price
                  </h2>
                  <div className="intro-item">
                    Behind our 15-year success is our panel of expert jewellers
                    who have been scouring the entire globe in pursuit of the
                    best and most stunning jewellery that can be offered at
                    affordable price for you.
                  </div>
                  <div className="intro-item">
                    Visit our online catalogue and shop for the finest earrings,
                    rings, bracelets, watches, silver, and the most luxurious
                    gemstones.
                  </div>
                  <div className="intro-btn">
                    <a
                      href="shop-grid-left.html"
                      className="button button-outline border-black animation-horizontal"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="section-column right animation-horizontal hover-opacity">
                <img
                  width="690"
                  height="498"
                  src="/media/slider/cscc.jpeg"
                  alt="intro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
