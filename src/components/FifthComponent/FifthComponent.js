"use client";
import useFetch from "@/hooks/FetchData";
import React from "react";
import Slider from "react-slick";
import Loader from "../Loader";

export default function FifthComponent() {
  const { data, loading, error } = useFetch(
    "https://gdsons.co.in/demo/shreebanaras/api/home-trending-products"
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container large">
        {/* <!-- Block Products --> */}
        <div className="block block-products slider">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>Trending Products</h2>
            </div>
            {loading && <Loader />}
            <div className="block-content">
              <div className="content-product-list slick-wrap">
                <div className="slick-sliders products-list grid">
                  <Slider {...settings}>
                    {data?.map((product) => (
                      <div
                        className="item-product slick-slide"
                        key={product.id}
                      >
                        <div className="items">
                          <div className="products-entry clearfix product-wapper">
                            <div className="products-thumb">
                              {/* <div className="product-lable">
                                <div className="hot">Hot</div>
                              </div> */}
                              <div className="product-thumb-hover">
                                <a
                                  href={`/category/${product.category.slug}/${product.slug}`}
                                >
                                  <img
                                    width="600"
                                    height="600"
                                    src={
                                      product.product_images[0].full_image_url
                                    }
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src={
                                      product.product_images[1].full_image_url
                                    }
                                    className="hover-image back"
                                    alt=""
                                  />
                                </a>
                              </div>
                              {/* <div className="product-button">
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div className="btn-compare" data-title="Compare">
                              <button className="product-btn">Compare</button>
                            </div>
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
                              </div> */}
                            </div>

                            <div className="products-content">
                              <div className="contents">
                                {/* <div className="rating">
                                  <div className="star star-0"></div>
                                  <span className="count">(0 review)</span>
                                  
                                </div> */}
                                <h3
                                  className="product-title"
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <a
                                    href={`/category/${product.category.slug}`}
                                  >
                                    {product.category.title}:-
                                  </a>
                                  <a
                                    href={`/category/${product.category.slug}/${product.slug}`}
                                  >
                                    {product.title}
                                  </a>
                                </h3>
                                <span className="price">$100.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
