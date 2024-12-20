"use client";
import Link from "next/link";
import React from "react";
import { useGoldRate } from "./goldrate";

export default function Header() {
  const { goldData, error } = useGoldRate();
console.log(error);

  return (
    <header id="site-header" className="site-header header-v3 small-padding">
      <div className="header-mobile">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    id="show-megamenu"
                    className="navbar-toggle"
                  ></button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                <div className="site-logo">
                  <Link href="/">
                    <img
                      width="400"
                      height="79"
                      src="/media/logo.png"
                      alt="Shree Banaras Jewels"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-mobile-fixed">
          {/* <!-- Shop --> */}
          <div className="shop-page">
            <Link href="/">
              <i className="wpb-icon-shop"></i>
            </Link>
          </div>

          {/* <!-- Login --> */}
          <div className="my-account">
            <div className="login-header">
              <Link href="https://www.facebook.com/shreebanarasjewels?mibextid=ZbWKwL">
                <i className="fa fa-facebook" style={{ fontSize: "20px" }}></i>
              </Link>
            </div>
          </div>

          {/* <!-- Search --> */}
          <div className="search-box">
            <div className="search-toggle">
              <Link href="https://www.instagram.com/shreebanarasjewels?igsh=c2I0cjd1NWlvbTM4">
                <i className="fa fa-instagram" style={{ fontSize: "20px" }}></i>
              </Link>
            </div>
          </div>

          {/* <!-- Wishlist --> */}
          <div className="wishlist-box">
            <Link href="https://pin.it/7Lj8xZ3be">
              <i className="fa fa-pinterest" style={{ fontSize: "20px" }}></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-desktop">
        <div className="header-top">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-10 col-lg-4 col-md-12 col-sm-12 col-12 header-center">
                  <div className="site-logo">
                    <Link href="/">
                      <img
                        width="400"
                        height="140"
                        src="/media/logo.png"
                        alt="Shree Banaras Jewels"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                  <div className="header-page-link">
                    {/* <!-- Login --> */}
                    <div className="login-header icon">
                      <Link href="https://www.facebook.com/shreebanarasjewels?mibextid=ZbWKwL">
                        <i
                          className="fa fa-facebook"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </Link>
                    </div>

                    {/* <!-- Wishlist --> */}
                    <div className="wishlist-box">
                      <Link href="https://www.instagram.com/shreebanarasjewels?igsh=c2I0cjd1NWlvbTM4">
                        <i
                          className="fa fa-instagram"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </Link>
                    </div>

                    <div className="wishlist-box">
                      <Link href="https://pin.it/7Lj8xZ3be">
                        <i
                          className="fa fa-pinterest"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle text-center no-padding">
          <div className="site-navigation">
            <nav id="main-navigation">
              <ul id="menu-main-menu" className="menu">
                <li className="level-0 menu-item menu-item-has-children ">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Jewellery</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">All Jewellery</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Finger Rings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Mangalsutra</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Chains</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Nose Pin</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Necklace Set</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">
                          Pendants & Earring Set
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Diamond</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Mangalsutras</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Gold</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Chains </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Mangalsutras</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Gemstone</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </Link>
                    </li>

                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Anklet</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Platinum</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Chains</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Mens</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="/coming-soon">
                    <span className="menu-item-text">Silver</span>
                  </Link>
                  <ul className="sub-menu">
                    <li className="level-1 menu-item menu-item-has-children">
                      <Link href="/coming-soon">
                        <span className="menu-item-text">Coins & Bars</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">20g</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">50g</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">100g</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">250g</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">500g</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <span className="menu-item-text">1000g</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <Link href="#">
                    <span className="menu-item-text">Gold Rate</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <span style={{ fontSize: "20px", color: "black" }}>
                        Today's Gold Rate
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        {`24 KT = ${goldData?.price_gram_24k} /gm`}
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        22 KT = {goldData?.price_gram_22k}/gm
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        21 KT = {goldData?.price_gram_21k}/gm
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        20 KT = {goldData?.price_gram_20k}/gm
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        18 KT = {goldData?.price_gram_18k}/gm
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "15px" }}>
                        16 KT = {goldData?.price_gram_16k}/gm
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
