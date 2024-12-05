import React from "react";

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer background four-columns">
      <div className="footer">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 column-1">
                  <div className="block block-menu m-b-20">
                    <h2 className="block-title">Contact Us</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <span>Head Office:</span> Swastik City Center,
                          Sigra-Mahmoorganj Road, Varanasi, India, Uttar Pradesh
                        </li>
                        <li>
                          <span>Tel:</span> 088088 88870
                        </li>
                        <li>
                          <span>Email: </span>
                          <a href="mailto:mail@shreebanarasjewels.com">
                            mail@shreebanarasjewels.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="block block-social">
                    <ul className="social-link">
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
                <div className="col-lg-3 col-md-6 column-2">
                  <div className="block block-menu">
                    <h2 className="block-title">Useful Links</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <a href="#l">HOME</a>
                        </li>
                        <li>
                          <a href="#">JEWELLERY</a>
                        </li>
                        <li>
                          <a href="#">DIAMOND</a>
                        </li>
                        <li>
                          <a href="#">GOLD</a>
                        </li>
                        <li>
                          <a href="#">PLATINUM</a>
                        </li>
                        <li>
                          <a href="#">SILVER</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 column-3">
                  <div className="block block-menu">
                    <h2 className="block-title">About Us</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Our Producers</a>
                        </li>
                        <li>
                          <a href="#">Sitemap</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 column-4">
                  <div className="block block-menu">
                    <h2 className="block-title">Catalog</h2>
                    <div className="block-content">
                      <ul>
                        <li>
                          <a href="#">Earrings</a>
                        </li>
                        <li>
                          <a href="#">Necklaces</a>
                        </li>
                        <li>
                          <a href="#">Bracelets</a>
                        </li>
                        <li>
                          <a href="#">Rings</a>
                        </li>
                        <li>
                          <a href="#">Jewelry Box</a>
                        </li>
                        <li>
                          <a href="#">Studs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-padding">
          <div className="section-container">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-left">
                    <p className="copyright">
                      Copyright © {new Date().getFullYear()} Shree Banaras
                      Jewels. | Developed by{" "}
                      <a href="https://wizards.co.in/">WIZARDS</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-right">
                    <div className="block block-image">
                      <img
                        width="309"
                        height="32"
                        src="media/payments.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
