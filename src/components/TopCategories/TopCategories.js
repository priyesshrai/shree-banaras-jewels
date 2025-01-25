"use client";
import useFetch from "@/hooks/FetchData";
import React, { useRef } from "react";
import Loader from "../Loader/Loader";
import Slider from "react-slick"; // Import the react-slick component
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

export default function TopCategories() {
  const { data, error, loading } = useFetch(
    "https://gdsons.co.in/demo/shreebanaras/api/categories"
  );

  const sliderRef = useRef(null); // Create a ref to the slider

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false, // Ensure arrows are enabled
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">
        <div className="block block-product-cats slider round-border">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>Top Categories</h2>
            </div>
            <div className="block-content">
              <div className="product-cats-list slider-container">
                <Slider {...slickSettings} ref={sliderRef}>
                  {data &&
                    data.map((category) => (
                      <div
                        className="item item-product-cat slick-slide"
                        key={category.id}
                      >
                        <div className="item-product-cat-content">
                          <a href={`/category/${category.slug}`}>
                            <div className="item-image animation-horizontal">
                              <img
                                width="150"
                                height="150"
                                src={category.thumb}
                                alt="Bracelets"
                                style={{ width: "190px", height: "190px" }}
                              />
                            </div>
                          </a>
                          <div className="product-cat-content-info">
                            <h2 className="item-title">
                              <a href={`/category/${category.slug}`}>
                                {category.title}
                              </a>
                            </h2>
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
    </section>
  );
}
