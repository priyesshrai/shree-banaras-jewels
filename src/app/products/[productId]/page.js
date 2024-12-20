// import { useRouter } from 'next/router';
import React from "react";

export default function page({ params }) {
  return (
    <>
      <div
        className="shop-details zoom"
        data-product_layout_thumb="scroll"
        data-zoom_scroll="true"
        data-zoom_contain_lens="true"
        data-zoomtype="inner"
        data-lenssize="200"
        data-lensshape="square"
        data-lensborder=""
        data-bordersize="2"
        data-bordercolour="#f9b61e"
        data-popup="false"
      >
        <div className="product-top-info" style={{marginTop:"80px"}}>
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="row">
                <div className="product-images col-lg-7 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="content-thumbnail-scroll">
                        <div
                          className="image-thumbnail slick-carousel slick-vertical"
                          data-asnavfor=".image-additional"
                          data-centermode="true"
                          data-focusonselect="true"
                          data-columns4="5"
                          data-columns3="4"
                          data-columns2="4"
                          data-columns1="4"
                          data-columns="4"
                          data-nav="true"
                          data-vertical='"true"'
                          data-verticalswiping='"true"'
                        >
                          <div className="img-item slick-slide">
                            <span className="img-thumbnail-scroll">
                              <img
                                width="600"
                                height="600"
                                src="/media/product/1.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="img-item slick-slide">
                            <span className="img-thumbnail-scroll">
                              <img
                                width="600"
                                height="600"
                                src="/media/product/1-2.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="img-item slick-slide">
                            <span className="img-thumbnail-scroll">
                              <img
                                width="600"
                                height="600"
                                src="/media/product/2.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="img-item slick-slide">
                            <span className="img-thumbnail-scroll">
                              <img
                                width="600"
                                height="600"
                                src="/media/product/2-2.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="img-item slick-slide">
                            <span className="img-thumbnail-scroll">
                              <img
                                width="600"
                                height="600"
                                src="/media/product/3.jpg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="scroll-image main-image">
                        <div
                          className="image-additional slick-carousel"
                          data-asnavfor=".image-thumbnail"
                          data-fade="true"
                          data-columns4="1"
                          data-columns3="1"
                          data-columns2="1"
                          data-columns1="1"
                          data-columns="1"
                          data-nav="true"
                        >
                          <div className="img-item slick-slide">
                            <img
                              width="900"
                              height="900"
                              src="/media/product/1.jpg"
                              alt=""
                              title=""
                            />
                          </div>
                          <div className="img-item slick-slide">
                            <img
                              width="900"
                              height="900"
                              src="/media/product/1-2.jpg"
                              alt=""
                              title=""
                            />
                          </div>
                          <div className="img-item slick-slide">
                            <img
                              width="900"
                              height="900"
                              src="/media/product/2.jpg"
                              alt=""
                              title=""
                            />
                          </div>
                          <div className="img-item slick-slide">
                            <img
                              width="900"
                              height="900"
                              src="/media/product/2-2.jpg"
                              alt=""
                              title=""
                            />
                          </div>
                          <div className="img-item slick-slide">
                            <img
                              width="900"
                              height="900"
                              src="/media/product/3.jpg"
                              alt=""
                              title=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-info col-lg-5 col-md-12 col-12">
                  <h1 className="title">Bora Armchair</h1>
                  <span className="price">
                    <del aria-hidden="true">
                      <span>$100.00</span>
                    </del>
                    <ins>
                      <span>$90.00</span>
                    </ins>
                  </span>
                  <div className="rating">
                    <div className="star star-5"></div>
                    <div className="review-count">
                      (3<span> reviews</span>)
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="variations">
                    <table cellSpacing="0">
                      <tbody>
                        <tr>
                          <td className="label">Size</td>
                          <td className="attributes">
                            <ul className="text">
                              <li>
                                <span>L</span>
                              </li>
                              <li>
                                <span>M</span>
                              </li>
                              <li>
                                <span>S</span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">Color</td>
                          <td className="attributes">
                            <ul className="colors">
                              <li>
                                <span className="color-1"></span>
                              </li>
                              <li>
                                <span className="color-2"></span>
                              </li>
                              <li>
                                <span className="color-3"></span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="buttons">
                    <div className="add-to-cart-wrap">
                      <div className="quantity">
                        <button type="button" className="plus">
                          +
                        </button>
                        <input
                          type="number"
                          className="qty"
                          step="1"
                          min="0"
                          max=""
                          name="quantity"
                          value="1"
                          title="Qty"
                          size="4"
                          placeholder=""
                          inputMode="numeric"
                          autoComplete="off"
                        />
                        <button type="button" className="minus">
                          -
                        </button>
                      </div>
                      <div className="btn-add-to-cart">
                        <a href="#" tabIndex="0">
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="btn-quick-buy" data-title="Wishlist">
                      <button className="product-btn">Buy It Now</button>
                    </div>
                    <div className="btn-wishlist" data-title="Wishlist">
                      <button className="product-btn">Add to wishlist</button>
                    </div>
                    <div className="btn-compare" data-title="Compare">
                      <button className="product-btn">Compare</button>
                    </div>
                  </div>
                  <div className="product-meta">
                    <span className="sku-wrapper">
                      SKU: <span className="sku">D2300-3-2-2</span>
                    </span>
                    <span className="posted-in">
                      Category:
                      <a href="shop-grid-left.html" rel="tag">
                        Bracelets
                      </a>
                    </span>
                    <span className="tagged-as">
                      Tags:
                      <a href="shop-grid-left.html" rel="tag">
                        Hot
                      </a>
                      ,
                      <a href="shop-grid-left.html" rel="tag">
                        Trend
                      </a>
                    </span>
                  </div>
                  <div className="social-share">
                    <a
                      href="#"
                      title="Facebook"
                      className="share-facebook"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>Facebook
                    </a>
                    <a href="#" title="Twitter" className="share-twitter">
                      <i className="fa fa-twitter"></i>Twitter
                    </a>
                    <a href="#" title="Pinterest" className="share-pinterest">
                      <i className="fa fa-pinterest"></i>Pinterest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="product-tabs-wrap">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#additional-information"
                      role="tab"
                    >
                      Additional information
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="additional-information"
                    role="tabpanel"
                  >
                    <table className="product-attributes">
                      <tbody>
                        <tr className="attribute-item">
                          <th className="attribute-label">Color</th>
                          <td className="attribute-value">
                            Antique, Chestnut, Grullo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-related">
          <div className="section-padding">
            <div className="section-container p-l-r">
              <div className="block block-products slider">
                <div className="block-title">
                  <h2>Related Products</h2>
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
                      data-columns2="3"
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
                                <a href="shop-details.html">
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/13.jpg"
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/13-2.jpg"
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div
                                  className="btn-compare"
                                  data-title="Compare"
                                >
                                  <button className="product-btn">
                                    Compare
                                  </button>
                                </div>
                                <span
                                  className="product-quickview"
                                  data-title="Quick View"
                                >
                                  <a
                                    href="#"
                                    className="quickview quickview-button"
                                  >
                                    Quick View
                                    <i className="icon-search"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="products-content">
                              <div className="contents text-center">
                                <h3 className="product-title">
                                  <a href="shop-details.html">
                                    Medium Flat Hoops
                                  </a>
                                </h3>
                                <div className="rating">
                                  <div className="star star-5"></div>
                                </div>
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
                                <div className="hot">Hot</div>
                              </div>
                              <div className="product-thumb-hover">
                                <a href="shop-details.html">
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/2.jpg"
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/2-2.jpg"
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div
                                  className="btn-compare"
                                  data-title="Compare"
                                >
                                  <button className="product-btn">
                                    Compare
                                  </button>
                                </div>
                                <span
                                  className="product-quickview"
                                  data-title="Quick View"
                                >
                                  <a
                                    href="#"
                                    className="quickview quickview-button"
                                  >
                                    Quick View
                                    <i className="icon-search"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="products-content">
                              <div className="contents text-center">
                                <h3 className="product-title">
                                  <a href="shop-details.html">
                                    Bold Pearl Hoop Earrings
                                  </a>
                                </h3>
                                <div className="rating">
                                  <div className="star star-4"></div>
                                </div>
                                <span className="price">$200.00</span>
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
                                <a href="shop-details.html">
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/3.jpg"
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/3-2.jpg"
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div
                                  className="btn-compare"
                                  data-title="Compare"
                                >
                                  <button className="product-btn">
                                    Compare
                                  </button>
                                </div>
                                <span
                                  className="product-quickview"
                                  data-title="Quick View"
                                >
                                  <a
                                    href="#"
                                    className="quickview quickview-button"
                                  >
                                    Quick View
                                    <i className="icon-search"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="products-content">
                              <div className="contents text-center">
                                <h3 className="product-title">
                                  <a href="shop-details.html">Twin Hoops</a>
                                </h3>
                                <div className="rating">
                                  <div className="star star-0"></div>
                                </div>
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
                                <a href="shop-details.html">
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/4.jpg"
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/4-2.jpg"
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div
                                  className="btn-compare"
                                  data-title="Compare"
                                >
                                  <button className="product-btn">
                                    Compare
                                  </button>
                                </div>
                                <span
                                  className="product-quickview"
                                  data-title="Quick View"
                                >
                                  <a
                                    href="#"
                                    className="quickview quickview-button"
                                  >
                                    Quick View
                                    <i className="icon-search"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="products-content">
                              <div className="contents text-center">
                                <h3 className="product-title">
                                  <a href="shop-details.html">
                                    Yilver And Turquoise Earrings
                                  </a>
                                </h3>
                                <div className="rating">
                                  <div className="star star-5"></div>
                                </div>
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
                                <div className="onsale">-7%</div>
                              </div>
                              <div className="product-thumb-hover">
                                <a href="shop-details.html">
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/5.jpg"
                                    className="post-image"
                                    alt=""
                                  />
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/5-2.jpg"
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
                                <div
                                  className="btn-wishlist"
                                  data-title="Wishlist"
                                >
                                  <button className="product-btn">
                                    Add to wishlist
                                  </button>
                                </div>
                                <div
                                  className="btn-compare"
                                  data-title="Compare"
                                >
                                  <button className="product-btn">
                                    Compare
                                  </button>
                                </div>
                                <span
                                  className="product-quickview"
                                  data-title="Quick View"
                                >
                                  <a
                                    href="#"
                                    className="quickview quickview-button"
                                  >
                                    Quick View
                                    <i className="icon-search"></i>
                                  </a>
                                </span>
                              </div>
                              <div className="product-stock">
                                <span className="stock">Out Of Stock</span>
                              </div>
                            </div>
                            <div className="products-content">
                              <div className="contents text-center">
                                <h3 className="product-title">
                                  <a href="shop-details.html">
                                    Amp Pendant Light Large
                                  </a>
                                </h3>
                                <div className="rating">
                                  <div className="star star-4"></div>
                                </div>
                                <span className="price">
                                  <del aria-hidden="true">
                                    <span>$150.00</span>
                                  </del>
                                  <ins>
                                    <span>$140.00</span>
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
        </div>
      </div>
    </>
  );
}
