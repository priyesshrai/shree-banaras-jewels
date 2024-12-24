import React from "react";

export default function FifthComponent() {
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container large">
        {/* <!-- Block Products --> */}
        <div className="block block-products slider">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>Trending Products</h2>
            </div>
            <div className="block-content">
              <div className="content-product-list slick-wrap">
                <div
                  className="slick-sliders products-list grid"
                  data-slidestoscroll="true"
                  data-dots="false"
                  data-nav="1"
                  data-columns4="1"
                  data-columns3="2"
                  data-columns2="2"
                  data-columns1="3"
                  data-columns1440="4"
                  data-columns="4"
                >
                  <div className="item-product slick-slide">
                    <div className="items">
                      <div className="products-entry clearfix product-wapper">
                        <div className="products-thumb">
                          <div className="product-lable">
                            <div className="hot">Hot</div>
                          </div>
                          <div className="product-thumb-hover">
                            <a href="#">
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-m-01.jpeg"
                                className="post-image"
                                alt=""
                              />
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-01.jpeg"
                                className="hover-image back"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-button">
                            <div
                              className="btn-add-to-cart"
                              data-title="Add to cart"
                            >
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn button"
                              >
                                Add to cart
                              </a>
                            </div>
                            <div className="btn-wishlist" data-title="Wishlist">
                              <button className="product-btn">
                                Add to wishlist
                              </button>
                            </div>
                            {/* <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div> */}
                            <span
                              className="product-quickview"
                              data-title="Quick View"
                            >
                              <a
                                href="#"
                                className="quickview quickview-button"
                              >
                                Quick View <i className="icon-search"></i>
                              </a>
                            </span>
                          </div>
                        </div>

                        <div className="products-content">
                          <div className="contents">
                            <div className="rating">
                              <div className="star star-0"></div>
                              <span className="count">(0 review)</span>
                            </div>
                            <h3 className="product-title">
                              <a href="shop-details.html">Finger Ring</a>
                            </h3>
                            <span className="price">$100.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-product slick-slide">
                    <div className="items">
                      <div className="products-entry clearfix product-wapper">
                        <div className="products-thumb">
                          <div className="product-lable">
                            <div className="onsale">-10%</div>
                            <div className="hot">Hot</div>
                          </div>
                          <div className="product-thumb-hover">
                            <a href="#">
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-m-02.jpeg"
                                className="post-image"
                                alt=""
                              />
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-02.jpeg"
                                className="hover-image back"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-button">
                            <div
                              className="btn-add-to-cart"
                              data-title="Add to cart"
                            >
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn button"
                              >
                                Add to cart
                              </a>
                            </div>
                            <div className="btn-wishlist" data-title="Wishlist">
                              <button className="product-btn">
                                Add to wishlist
                              </button>
                            </div>
                            {/* <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div> */}
                            <span
                              className="product-quickview"
                              data-title="Quick View"
                            >
                              <a
                                href="#"
                                className="quickview quickview-button"
                              >
                                Quick View <i className="icon-search"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="products-content">
                          <div className="contents">
                            <div className="rating">
                              <div className="star star-5"></div>
                              <span className="count">(1 review)</span>
                            </div>
                            <h3 className="product-title">
                              <a href="shop-details.html">Dangle Earrings</a>
                            </h3>
                            <span className="price">
                              <del aria-hidden="true">
                                <span>$200.00</span>
                              </del>
                              <ins>
                                <span>$180.00</span>
                              </ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-product slick-slide">
                    <div className="items">
                      <div className="products-entry clearfix product-wapper">
                        <div className="products-thumb">
                          <div className="product-lable">
                            <div className="hot">Hot</div>
                          </div>
                          <div className="product-thumb-hover">
                            <a href="#">
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-m-03.jpeg"
                                className="post-image"
                                alt=""
                              />
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-03.jpeg"
                                className="hover-image back"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-button">
                            <div
                              className="btn-add-to-cart"
                              data-title="Add to cart"
                            >
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn button"
                              >
                                Add to cart
                              </a>
                            </div>
                            <div className="btn-wishlist" data-title="Wishlist">
                              <button className="product-btn">
                                Add to wishlist
                              </button>
                            </div>
                            {/* <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div> */}
                            <span
                              className="product-quickview"
                              data-title="Quick View"
                            >
                              <a
                                href="#"
                                className="quickview quickview-button"
                              >
                                Quick View <i className="icon-search"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="products-content">
                          <div className="contents">
                            <div className="rating">
                              <div className="star star-0"></div>
                              <span className="count">(0 review)</span>
                            </div>
                            <h3 className="product-title">
                              <a href="shop-details.html">Necklaces</a>
                            </h3>
                            <span className="price">$150.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-product slick-slide">
                    <div className="items">
                      <div className="products-entry clearfix product-wapper">
                        <div className="products-thumb">
                          <div className="product-lable">
                            <div className="onsale">-33%</div>
                          </div>
                          <div className="product-thumb-hover">
                            <a href="#">
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-m-04.jpeg"
                                className="post-image"
                                alt=""
                              />
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-04.jpeg"
                                className="hover-image back"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-button">
                            <div
                              className="btn-add-to-cart"
                              data-title="Add to cart"
                            >
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn button"
                              >
                                Add to cart
                              </a>
                            </div>
                            <div className="btn-wishlist" data-title="Wishlist">
                              <button className="product-btn">
                                Add to wishlist
                              </button>
                            </div>
                            {/* <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div> */}
                            <span
                              className="product-quickview"
                              data-title="Quick View"
                            >
                              <a
                                href="#"
                                className="quickview quickview-button"
                              >
                                Quick View <i className="icon-search"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="products-content">
                          <div className="contents">
                            <div className="rating">
                              <div className="star star-4"></div>
                              <span className="count">(2 reviews)</span>
                            </div>
                            <h3 className="product-title">
                              <a href="shop-details.html">Pendent Set</a>
                            </h3>
                            <span className="price">
                              <del aria-hidden="true">
                                <span>$150.00</span>
                              </del>
                              <ins>
                                <span>$100.00</span>
                              </ins>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="item-product slick-slide">
                    <div className="items">
                      <div className="products-entry clearfix product-wapper">
                        <div className="products-thumb">
                          <div className="product-lable">
                            <div className="onsale">-33%</div>
                          </div>
                          <div className="product-thumb-hover">
                            <a href="#">
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-m-04.jpeg"
                                className="post-image"
                                alt=""
                              />
                              <img
                                width="600"
                                height="600"
                                src="/media/fifth-component/pro-04.jpeg"
                                className="hover-image back"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="product-button">
                            <div
                              className="btn-add-to-cart"
                              data-title="Add to cart"
                            >
                              <a
                                rel="nofollow"
                                href="#"
                                className="product-btn button"
                              >
                                Add to cart
                              </a>
                            </div>
                            <div className="btn-wishlist" data-title="Wishlist">
                              <button className="product-btn">
                                Add to wishlist
                              </button>
                            </div>
                            {/* <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div> */}
                            <span
                              className="product-quickview"
                              data-title="Quick View"
                            >
                              <a
                                href="#"
                                className="quickview quickview-button"
                              >
                                Quick View <i className="icon-search"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="products-content">
                          <div className="contents">
                            <div className="rating">
                              <div className="star star-4"></div>
                              <span className="count">(2 reviews)</span>
                            </div>
                            <h3 className="product-title">
                              <a href="shop-details.html">Pendent Set</a>
                            </h3>
                            <span className="price">
                              <del aria-hidden="true">
                                <span>$150.00</span>
                              </del>
                              <ins>
                                <span>$100.00</span>
                              </ins>
                            </span>
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
