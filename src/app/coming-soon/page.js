import React from "react";

export default function page() {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">
        <div className="block block-product-cats slider round-border">
          <div className="block-widget-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-6 col-6">
                  <h1 className="comming-soon">We are launching soon!</h1>
                  <p style={{fontSize:"22px"}}>Our website is under development.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="img-con">

                  <img src="media/coming-soon/coming-soon.svg" alt="" />
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
