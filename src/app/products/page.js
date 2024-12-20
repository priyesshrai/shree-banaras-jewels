"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  function handleWiget(event) {
    const targetElement = event.target.closest('.widget-title'); 
    if (!targetElement) return; 
    const widgetBody = targetElement.nextElementSibling; 
    console.log(widgetBody);
    if (widgetBody) {
      widgetBody.classList.toggle('active'); 
    }
  }

  function handleFilterMenu(event){
    event.preventDefault();
    setShowFilterMenu(true)
  }

  return (
    <section className="section-padding" style={{ margin: "50px 0" }}>
      <div className="section-container p-l-r">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-12">
            <div className="products-topbar clearfix">
              <div className="products-topbar-left">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <Link href="#" className="filter-btn" onClick={handleFilterMenu}>
                      <i className="hgi-stroke hgi-left-to-right-list-bullet lst" />
                      <span>Filters</span>
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="products-topbar-right">
                <div className="products-sort dropdown">
                  <span
                    className="sort-toggle dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Default sorting
                  </span>
                  <ul
                    className="sort-list dropdown-menu"
                    x-placement="bottom-start"
                  >
                    <li className="active">
                      <Link href="#">Default sorting</Link>
                    </li>
                    <li>
                      <Link href="#">Sort by popularity</Link>
                    </li>
                    <li>
                      <Link href="#">Sort by average rating</Link>
                    </li>
                    <li>
                      <Link href="#">Sort by latest</Link>
                    </li>
                    <li>
                      <Link href="#">Sort by price: low to high</Link>
                    </li>
                    <li>
                      <Link href="#">Sort by price: high to low</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="products/Shree-Banaras-Jewels">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="sale">Sale</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">20%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">20%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">Hot</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="sale">Sale</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">20%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-12 col-sm-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <Link href="#">
                    <img
                      className="default-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="/media/product/1-2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="best">20%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <Link href="shop-grid-right">Bangles</Link>
                </div>
                <h2 style={{ marginTop: "5px" }}>
                  <Link href="#">Golden Bangles</Link>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div className="rating">
                      <div className="star star-5"></div>
                      <span className="count">(1 review)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <Link href="vendor-details-1">Shree Banaras Jewels</Link>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$23.85</span>
                    <span className="old-price">$25.8</span>
                  </div>
                  <div className="add-cart">
                    <Link className="add" href="shop-cart">
                      <i className="fi-rs-shopping-cart mr-5"></i>Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="pagination">
          <ul className="page-numbers">
            <li>
              <Link className="prev page-numbers" href="#">
                Previous
              </Link>
            </li>
            <li>
              <span aria-current="page" className="page-numbers current">
                1
              </span>
            </li>
            <li>
              <Link className="page-numbers" href="#">
                2
              </Link>
            </li>
            <li>
              <Link className="page-numbers" href="#">
                3
              </Link>
            </li>
            <li>
              <Link className="next page-numbers" href="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>

        <aside className={`${showFilterMenu ? "active" : ""} sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper`}>
          <div className={`${showFilterMenu ? "active" : ""} sidebar-overlay`}></div>
          <div className="sidebar-wraper">
            <div className="sidebar-close-wraper">
              <Link className="sidebar-close" href="#" onClick={()=>setShowFilterMenu(false)}>
                <i className="hgi-stroke hgi-multiplication-sign" />
              </Link>
            </div>

            <div className="widget widget-collapsible" >
              <h3 className="widget-title" onClick={handleWiget}>
                <span>All Categories</span>
                <span className="toggle-btn"></span>
              </h3>
              <ul className="widget-body">
                <li>
                  <input type="checkbox" id="rings" />
                  <label htmlFor="rings">Rings</label>
                </li>
                <li>
                  <input type="checkbox" id="necklaces" />
                  <label htmlFor="necklaces">Necklaces</label>
                </li>
                <li>
                  <input type="checkbox" id="bracelets" />
                  <label htmlFor="bracelets">Bracelets</label>
                </li>
                <li>
                  <input type="checkbox" id="earrings" />
                  <label htmlFor="earrings">Earrings</label>
                </li>
                <li>
                  <input type="checkbox" id="pendants" />
                  <label htmlFor="pendants">Pendants</label>
                </li>
                <li>
                  <input type="checkbox" id="watches" />
                  <label htmlFor="watches">Watches</label>
                </li>
              </ul>
            </div>

            <div className="widget widget-collapsible">
              <h3 className="widget-title"  onClick={handleWiget}>
                <span>Size</span>
                <span className="toggle-btn"></span>
              </h3>
              <ul className="widget-body filter-items">
                <li>
                  <input type="checkbox" id="size-small" />
                  <label htmlFor="size-small">Small</label>
                </li>
                <li>
                  <input type="checkbox" id="size-medium" />
                  <label htmlFor="size-medium">Medium</label>
                </li>
                <li>
                  <input type="checkbox" id="size-large" />
                  <label htmlFor="size-large">Large</label>
                </li>
                <li>
                  <input type="checkbox" id="size-extra-large" />
                  <label htmlFor="size-extra-large">ExtrLink Large</label>
                </li>
              </ul>
            </div>

            <div className="widget widget-collapsible" >
              <h3 className="widget-title" onClick={handleWiget}>
                <span>Price</span>
                <span className="toggle-btn"></span>
              </h3>
              <ul className="widget-body filter-items">
                <li>
                  <input type="checkbox" id="0 - 1000" />
                  <label htmlFor="0 - 1000">0 - 1000</label>
                </li>
                <li>
                  <input type="checkbox" id="1000 - 10000" />
                  <label htmlFor="1000 - 10000">1000 - 10000</label>
                </li>
                <li>
                  <input type="checkbox" id="10000 - 50000" />
                  <label htmlFor="10000 - 50000">10000 - 50000</label>
                </li>
                <li>
                  <input type="checkbox" id="50000 - 100000" />
                  <label htmlFor="50000 - 100000">50000 - 100000</label>
                </li>
              </ul>
            </div>

            <div className="widget widget-collapsible" >
              <h3 className="widget-title" onClick={handleWiget}>
                <span>Color</span>
                <span className="toggle-btn"></span>
              </h3>
              <ul className="widget-body filter-items">
                <li>
                  <input type="checkbox" id="color-gold" />
                  <label htmlFor="color-gold">Gold</label>
                </li>
                <li>
                  <input type="checkbox" id="color-silver" />
                  <label htmlFor="color-silver">Silver</label>
                </li>
                <li>
                  <input type="checkbox" id="color-rose-gold" />
                  <label htmlFor="color-rose-gold">Rose Gold</label>
                </li>
                <li>
                  <input type="checkbox" id="color-white-gold" />
                  <label htmlFor="color-white-gold">White Gold</label>
                </li>
                <li>
                  <input type="checkbox" id="color-platinum" />
                  <label htmlFor="color-platinum">Platinum</label>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      {/* </div> */}
    </section>
  );
}
