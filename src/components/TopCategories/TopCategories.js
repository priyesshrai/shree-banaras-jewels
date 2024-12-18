import React from "react";

export default function TopCategories() {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">
        {/* <!-- Block Product Categories --> */}
        <div className="block block-product-cats slider round-border">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>Top Categories</h2>
            </div>
            <div className="block-content">
              <div className="product-cats-list slick-wrap">
                <div
                  className="slick-sliders content-category"
                  data-dots="0"
                  data-slidestoscroll="true"
                  data-nav="1"
                  data-columns4="2"
                  data-columns3="3"
                  data-columns2="3"
                  data-columns1="5"
                  data-columns1440="5"
                  data-columns="5"
                >
                  <div className="item item-product-cat slick-slide">
                    <div className="item-product-cat-content">
                      <a href="/coming-soon">
                        <div className="item-image animation-horizontal">
                          <img
                            width="258"
                            height="258"
                            src="media/top-categories/cat-01.jpg"
                            alt="Bracelets"
                          />
                        </div>
                      </a>
                      <div className="product-cat-content-info">
                        <h2 className="item-title">
                          <a href="/coming-soon">Necklaces</a>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="item item-product-cat slick-slide">
                    <div className="item-product-cat-content">
                      <a href="/coming-soon">
                        <div className="item-image animation-horizontal">
                          <img
                            width="258"
                            height="258"
                            src="media/top-categories/cat-02.jpeg"
                            alt="Earrings"
                          />
                        </div>
                      </a>
                      <div className="product-cat-content-info">
                        <h2 className="item-title">
                          <a href="/coming-soon">Earrings</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="item item-product-cat slick-slide">
                    <div className="item-product-cat-content">
                      <a href="/coming-soon">
                        <div className="item-image animation-horizontal">
                          <img
                            width="258"
                            height="258"
                            src="media/top-categories/cat-03.jpeg"
                            alt="Earrings"
                          />
                        </div>
                      </a>
                      <div className="product-cat-content-info">
                        <h2 className="item-title">
                          <a href="/coming-soon">Diamond Ring</a>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="item item-product-cat slick-slide">
                    <div className="item-product-cat-content">
                      <a href="/coming-soon">
                        <div className="item-image animation-horizontal">
                          <img
                            width="258"
                            height="258"
                            src="media/top-categories/cat-04.jpg"
                            alt="Pendants"
                          />
                        </div>
                      </a>
                      <div className="product-cat-content-info">
                        <h2 className="item-title">
                          <a href="/coming-soon">Pendants</a>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="item item-product-cat slick-slide">
                    <div className="item-product-cat-content">
                      <a href="/coming-soon">
                        <div className="item-image animation-horizontal">
                          <img
                            width="258"
                            height="258"
                            src="media/top-categories/cat-05.jpg"
                            alt="Gold Rings"
                          />
                        </div>
                      </a>
                      <div className="product-cat-content-info">
                        <h2 className="item-title">
                          <a href="/coming-soon">Gold Rings</a>
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
    </section>
  );
}
