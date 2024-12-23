"use client";
import React from "react";
import { useGoldRate } from "./goldrate";

export default function Header() {
  const { goldData, error } = useGoldRate();

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
                  <a href="/">
                    <img
                      width="400"
                      height="79"
                      src="/media/logo.png"
                      alt="Shree Banaras Jewels"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-mobile-fixed">
          <div className="shop-page">
            <a href="/">
              <i className="wpb-icon-shop"></i>
            </a>
          </div>

          <div className="my-account">
            <div className="login-header">
              <a href="https://www.facebook.com/shreebanarasjewels?mibextid=ZbWKwL">
                <i className="fa fa-facebook" style={{ fontSize: "20px" }}></i>
              </a>
            </div>
          </div>

          <div className="search-box">
            <div className="search-toggle">
              <a href="https://www.instagram.com/shreebanarasjewels?igsh=c2I0cjd1NWlvbTM4">
                <i className="fa fa-instagram" style={{ fontSize: "20px" }}></i>
              </a>
            </div>
          </div>

          <div className="wishlist-box">
            <a href="https://pin.it/7Lj8xZ3be">
              <i className="fa fa-pinterest" style={{ fontSize: "20px" }}></i>
            </a>
          </div>
        </div>
      </div>

      <div className="header-desktop">
        <div className="header-top">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-9 col-lg-4 col-md-12 col-sm-12 col-12 header-center">
                  <div className="site-logo">
                    <a href="/">
                      <img
                        width="400"
                        height="140"
                        src="/media/logo.png"
                        alt="Shree Banaras Jewels"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                  <div className="">
                    <ul className="h-social">
                      <li>
                        <a href="https://www.facebook.com/shreebanarasjewels?mibextid=ZbWKwL">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/shreebanarasjewels?igsh=c2I0cjd1NWlvbTM4">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://pin.it/7Lj8xZ3be">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://youtube.com/@shreebanarasjewels5836">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
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
                  <a href="/coming-soon">
                    <span className="menu-item-text">Jewellery</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">All Jewellery</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Finger Rings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Mangalsutra</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Chains</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Nose Pin</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Necklace Set</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">
                          Pendants & Earring Set
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="/coming-soon">
                    <span className="menu-item-text">Diamond</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Mangalsutras</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="/coming-soon">
                    <span className="menu-item-text">Gold</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Chains </span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Mangalsutras</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="/coming-soon">
                    <span className="menu-item-text">Gemstone</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Pendants</span>
                      </a>
                    </li>

                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Necklaces</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bangles</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Nose pins</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Anklet</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="/coming-soon">
                    <span className="menu-item-text">Platinum</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Rings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Earrings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Chains</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Bracelets</span>
                      </a>
                    </li>
                    <li>
                      <a href="/coming-soon">
                        <span className="menu-item-text">Mens</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="/coming-soon">
                    <span className="menu-item-text">Silver</span>
                  </a>
                  <ul className="sub-menu">
                    <li className="level-1 menu-item menu-item-has-children">
                      <a href="/coming-soon">
                        <span className="menu-item-text">Coins & Bars</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">20g</span>
                          </a>
                        </li>
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">50g</span>
                          </a>
                        </li>
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">100g</span>
                          </a>
                        </li>
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">250g</span>
                          </a>
                        </li>
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">500g</span>
                          </a>
                        </li>
                        <li>
                          <a href="/coming-soon">
                            <span className="menu-item-text">1000g</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="level-0 menu-item menu-item-has-children">
                  <a href="#">
                    <span className="menu-item-text">Gold Rate</span>
                  </a>
                  {error ? (
                    <ul className="sub-menu">
                      <li>
                        <span style={{ fontSize: "15px", color: "black" }}>
                          Loading latest gold rate...
                        </span>
                      </li>
                    </ul>
                  ) : (
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
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
