import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Shop.css";

function Shop() {
  return (
    <>
      <link
        href="../../Assets/shop/t/9/assets/icons.min4e41.css?v=144771626144460745771698938059"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icofont.minba8d.css?v=49818375117710154861698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <link
        href="../../Assets/shop/t/9/assets/bootstrap.min528d.css?v=19868337340211324411698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/stylea2a8.css?v=23287745902246098161698938060"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-default8cb8.css?v=87801545591066565141698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-custom0acb.css?v=63313606314167933051698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/skin-and-color85c1.css?v=64489753365287532231698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      <script src="../../Assets/shop/t/9/assets/theme08ca.js?v=58729172318499673551698938089"></script>

      <div id="shopify-section-header" className="shopify-section">
        <Header />
        <div className="mobile-off-canvas-active">
          <a className="mobile-aside-close">
            <i className="sli sli-close" />
          </a>
          <div className="header-mobile-aside-wrap">
            <div className="mobile-search">
              <form
                className="search-form"
                action=""
                method="get"
                role="search"
              >
                <input
                  type="search"
                  name="q"
                  defaultValue=""
                  placeholder="I'm looking for…"
                />
                <button className="button-search" type="submit">
                  <i className="sli sli-magnifier" />
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap">
              <div className="mobile-navigation">
                <nav>
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children">
                      <a href="../index.html">Home</a>
                      <ul className="dropdown">
                        <li>
                          <a href="../index501f.html?preview_theme_id=122477707344">
                            Home Demo v1
                          </a>
                        </li>
                        <li>
                          <a href="../index2c6b.html?preview_theme_id=122478461008">
                            Home Demo v2
                          </a>
                        </li>
                        <li>
                          <a href="../index712d.html?preview_theme_id=122478493776">
                            Home Demo v3
                          </a>
                        </li>
                        <li>
                          <a href="../index3b70.html?preview_theme_id=122479902800">
                            Home Demo v4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/shop">Shop</a>
                      <ul className="dropdown">
                        <li className="mobile_img_menu">
                          <a href="featured-books.html">
                            <img
                              src="../Assets/shop/collections/p3f10c.png?v=1698470305"
                              alt="Featured Books"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="featured-books.html" title="">
                              Featured Books
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="best-sellers.html">
                            <img
                              src="../Assets/shop/collections/2d8ec.png?v=1698470765"
                              alt="Best Sellers"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="best-sellers.html" title="">
                              Best Sellers
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="most-viewed.html">
                            <img
                              src="../Assets/shop/collections/p880c1.png?v=1698470737"
                              alt="Most Viewed"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="most-viewed.html" title="">
                              Most Viewed
                            </a>{" "}
                          </span>
                        </li>
                        <li className="m_mega-menu-li">
                          <a href="../collections.html">All Collections</a>
                          <ul className="dropdown">
                            <li>
                              <a href="featured-books.html">Romance</a>
                            </li>
                            <li>
                              <a href="best-sellers.html">History</a>
                            </li>
                            <li>
                              <a href="best-sellers.html">Comedy</a>
                            </li>
                            <li>
                              <a href="most-viewed.html">Fiction</a>
                            </li>
                            <li>
                              <a href="best-sellers.html">Adventure</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="../blogs/news.html">Blog</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="../pages/authors-list.html">
                            Author List Page
                          </a>
                        </li>
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact us</a>
                        </li>
                        <li>
                          <a href="../pages/faq.html">Faq Page</a>
                        </li>
                        <li>
                          <a href="../404.html">404 Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mobile-curr-lang-wrap">
              <div className="single-mobile-curr-lang">
                <a className="mobile-account-active remove_href" href="#">
                  Account <i className="sli sli-arrow-down" />
                </a>
                <div className="lang-curr-dropdown account-dropdown-active">
                  <ul>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Create Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-area breadcrumbs-section">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="breadcrumb-content text-center breadcrumbs-inner">
              <div className="page-title">
                <h1 className="breadcrumbs-title">Shop</h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li>Shop</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <div
          id="shopify-section-template--14595761406032__main"
          className="shopify-section"
        >
          <div
            className="shop-area pt-95 pb-100 section-padding-3"
            id="section-template--14595761406032__main"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="sidebar-wrapper shop-sidebar storefront-filter icofont">
                    <form className="filter-form" name="testform" id="myform">
                      <div className="blog-sidebar sidebar-single selected-filter-value">
                        <ul className="blog-tags"></ul>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Authors</h5>
                        <div className="sidebar-body widget-collapse-hide">
                          <ul className="checkbox-container categories-list">
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="Emax"
                                  id="Filter-authors-1"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-1"
                                  className="custom-control-label"
                                >
                                  Emax <span className="count_value"> 2</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="Erik Martin"
                                  id="Filter-authors-2"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-2"
                                  className="custom-control-label"
                                >
                                  Erik Martin{" "}
                                  <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="Historical"
                                  id="Filter-authors-3"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-3"
                                  className="custom-control-label"
                                >
                                  Historical{" "}
                                  <span className="count_value"> 2</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="James Dylan"
                                  id="Filter-authors-4"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-4"
                                  className="custom-control-label"
                                >
                                  James Dylan{" "}
                                  <span className="count_value"> 4</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="Sage Isaias"
                                  id="Filter-authors-5"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-5"
                                  className="custom-control-label"
                                >
                                  Sage Isaias{" "}
                                  <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.vendor"
                                  defaultValue="Team90Degree"
                                  id="Filter-authors-6"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-authors-6"
                                  className="custom-control-label"
                                >
                                  Team90Degree{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Semester</h5>
                        <div className="sidebar-body widget-collapse-hide">
                          <ul className="checkbox-container categories-list">
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Black"
                                  id="Filter-color-1"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-1"
                                  className="custom-control-label"
                                >
                                  Black <span className="count_value"> 10</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Blue"
                                  id="Filter-color-2"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-2"
                                  className="custom-control-label"
                                >
                                  Blue <span className="count_value"> 8</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Gold"
                                  id="Filter-color-3"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-3"
                                  className="custom-control-label"
                                >
                                  Gold <span className="count_value"> 8</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Linen"
                                  id="Filter-color-4"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-4"
                                  className="custom-control-label"
                                >
                                  Linen <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Pink"
                                  id="Filter-color-5"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-5"
                                  className="custom-control-label"
                                >
                                  Pink <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="Silver"
                                  id="Filter-color-6"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-6"
                                  className="custom-control-label"
                                >
                                  Silver <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.v.option.color"
                                  defaultValue="White"
                                  id="Filter-color-7"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-color-7"
                                  className="custom-control-label"
                                >
                                  White <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Categories</h5>
                        <div className="sidebar-body widget-collapse-hide">
                          <ul className="checkbox-container categories-list">
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Accessories"
                                  id="Filter-categories-1"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-1"
                                  className="custom-control-label"
                                >
                                  Accessories{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Best seller"
                                  id="Filter-categories-2"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-2"
                                  className="custom-control-label"
                                >
                                  Best seller{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="City"
                                  id="Filter-categories-3"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-3"
                                  className="custom-control-label"
                                >
                                  City <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Erik Martin"
                                  id="Filter-categories-4"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-4"
                                  className="custom-control-label"
                                >
                                  Erik Martin{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Handbags"
                                  id="Filter-categories-5"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-5"
                                  className="custom-control-label"
                                >
                                  Handbags{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Historical"
                                  id="Filter-categories-6"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-6"
                                  className="custom-control-label"
                                >
                                  Historical{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Jackets"
                                  id="Filter-categories-7"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-7"
                                  className="custom-control-label"
                                >
                                  Jackets{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Jewelry"
                                  id="Filter-categories-8"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-8"
                                  className="custom-control-label"
                                >
                                  Jewelry{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Kids"
                                  id="Filter-categories-9"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-9"
                                  className="custom-control-label"
                                >
                                  Kids <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="New"
                                  id="Filter-categories-10"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-10"
                                  className="custom-control-label"
                                >
                                  New <span className="count_value"> 5</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Pendant"
                                  id="Filter-categories-11"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-11"
                                  className="custom-control-label"
                                >
                                  Pendant{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Ring"
                                  id="Filter-categories-12"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-12"
                                  className="custom-control-label"
                                >
                                  Ring <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Sage Isaias"
                                  id="Filter-categories-13"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-13"
                                  className="custom-control-label"
                                >
                                  Sage Isaias{" "}
                                  <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Story"
                                  id="Filter-categories-14"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-14"
                                  className="custom-control-label"
                                >
                                  Story <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Tops"
                                  id="Filter-categories-15"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-15"
                                  className="custom-control-label"
                                >
                                  Tops <span className="count_value"> 1</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Trends"
                                  id="Filter-categories-16"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-16"
                                  className="custom-control-label"
                                >
                                  Trends{" "}
                                  <span className="count_value"> 10</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="filter.p.tag"
                                  defaultValue="Women"
                                  id="Filter-categories-17"
                                  className="custom-control-input"
                                />
                                <label
                                  htmlFor="Filter-categories-17"
                                  className="custom-control-label"
                                >
                                  Women <span className="count_value"> 3</span>
                                </label>
                                <span className="checkmark" />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="shop-top-bar">
                    <div className="select-shoing-wrap">
                      <div className="shop-select d-flex">
                        <label htmlFor="SortBy">Sort by :</label>
                        <select name="SortBy" id="SortBy">
                          <option value="manual">Featured</option>
                          <option value="best-selling">Best Selling</option>
                          <option value="title-ascending">
                            Alphabetically, A-Z
                          </option>
                          <option value="title-descending">
                            Alphabetically, Z-A
                          </option>
                          <option value="price-ascending">
                            Price, low to high
                          </option>
                          <option value="price-descending">
                            Price, high to low
                          </option>
                          <option value="created-descending">
                            Date, new to old
                          </option>
                          <option value="created-ascending">
                            Date, old to new
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="shop-bottom-area mt-35">
                    <div className="tab-content jump">
                      <div>
                        <div className="row theme-products ">
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344367005776 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/chronicles-of-celestial-realms.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p11_839563f9-8797-449c-a4ae-0e4aefce618e_largef767.png?v=1697899506"
                                          alt="Chronicles of Celestial Realms"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('chronicles-of-celestial-realms')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="chronicles-of-celestial-realms"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344367005776, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Isabel Allende
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/chronicles-of-celestial-realms.html">
                                        Chronicles of Celestial Realms
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 619.34</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('chronicles-of-celestial-realms')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="chronicles-of-celestial-realms"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344367005776, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344359665744 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/first-love-shadows-of-nebula.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p_large9c99.png?v=1697897606"
                                          alt="First Love Shadows of Nebula"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('first-love-shadows-of-nebula')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="first-love-shadows-of-nebula"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344359665744, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        John Grisham
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/first-love-shadows-of-nebula.html">
                                        First Love Shadows of Nebula
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 92.60</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('first-love-shadows-of-nebula')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="first-love-shadows-of-nebula"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344359665744, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344364122192 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/the-kaleidoscope-chronicles-book.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p15_d059172a-244e-457d-b1a7-7828e4ece21b_large1396.png?v=1697900611"
                                          alt="Kaleidoscope Chronicles Book"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('the-kaleidoscope-chronicles-book')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="the-kaleidoscope-chronicles-book"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344364122192, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Michael Crichton
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/the-kaleidoscope-chronicles-book.html">
                                        Kaleidoscope Chronicles Book
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="old">Rs. 250.00</span>
                                      <span className="new">Rs. 230.78</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('the-kaleidoscope-chronicles-book')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="the-kaleidoscope-chronicles-book"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344364122192, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344356552784 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/xemstone-garden-hairpin-set.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p3_28db5c2d-14fa-4bd0-8751-0e9e77afa84b_largebd9c.png?v=1697897526"
                                          alt="Love in Bloom Timeless Wisdom"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('xemstone-garden-hairpin-set')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="xemstone-garden-hairpin-set"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344356552784, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Octavia E. Butler
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/xemstone-garden-hairpin-set.html">
                                        Love in Bloom Timeless Wisdom
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 92.60</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('xemstone-garden-hairpin-set')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="xemstone-garden-hairpin-set"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344356552784, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344362156112 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/mystery-of-the-dark-village.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p10_large89e7.png?v=1697899306"
                                          alt="Mystery Of The Dark Village"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('mystery-of-the-dark-village')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="mystery-of-the-dark-village"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344362156112, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        John Steinbeck
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/mystery-of-the-dark-village.html">
                                        Mystery Of The Dark Village
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 821.61</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('mystery-of-the-dark-village')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="mystery-of-the-dark-village"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344362156112, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344361926736 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/our-familay-mysteries-ever.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p9_15c65cb4-1c8c-4610-be41-5b59097f5188_largef354.png?v=1697899180"
                                          alt="Our Familay Mysteries Ever"
                                        />
                                      </a>
                                      <div className="theme-product-countdown-wrap">
                                        <div
                                          className="theme-product-countdown"
                                          data-countdown="2025/05/24"
                                        />
                                      </div>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('our-familay-mysteries-ever')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="our-familay-mysteries-ever"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344361926736, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        James Patterson
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/our-familay-mysteries-ever.html">
                                        Our Familay Mysteries Ever
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="old">Rs. 80.00</span>
                                      <span className="new">Rs. 59.00</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('our-familay-mysteries-ever')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="our-familay-mysteries-ever"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344361926736, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344356159568 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/science-fiction-saga-you.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p1_372ae42d-8c5a-4367-8752-d575051b0c43_largea8c4.png?v=1697897815"
                                          alt="Science Fiction Saga You"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('science-fiction-saga-you')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="science-fiction-saga-you"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344356159568, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Jim Richardson
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/science-fiction-saga-you.html">
                                        Science Fiction Saga You
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 92.60</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('science-fiction-saga-you')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="science-fiction-saga-you"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344356159568, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344365793360 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/secrets-of-the-velvet-quill.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p12_large0058.png?v=1697900030"
                                          alt="Secrets of the Velvet Quill"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('secrets-of-the-velvet-quill')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="secrets-of-the-velvet-quill"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344365793360, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Ernest Hemingway
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/secrets-of-the-velvet-quill.html">
                                        Secrets of the Velvet Quill
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 471.46</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('secrets-of-the-velvet-quill')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="secrets-of-the-velvet-quill"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344365793360, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xl-4 col-lg-4 
                      col-md-4 col-sm-6 
                      col-12"
                          >
                            <div
                              className="40344363368528 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle
      
      
       theme-product-countdown-bottom
       product-wrapper-class"
                            >
                              <div className="theme-product-inner icon_bg grid__style__2">
                                <div className="theme-product-image-wrap product-color">
                                  <div className="theme-product-image">
                                    <div className="theme-product-cus-tab icon_bg_img">
                                      <a
                                        href="../products/silant-rain-we-are-together.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          className="popup_cart_image"
                                          src="../Assets/shop/files/p13_ff10421d-3bcf-4c91-8bdf-824e9b292b5b_large1afc.png?v=1697900157"
                                          alt="Silant Rain We Are Together"
                                        />
                                      </a>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('silant-rain-we-are-together')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="silant-rain-we-are-together"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344363368528, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="color_size_img_wrap" />
                                    </div>
                                  </div>
                                </div>
                                <div className="theme-product-content  content__center ">
                                  <div className="theme-product-content-inner ">
                                    <div className="theme-product-categories ">
                                      <a href="#" className="remove_href">
                                        Virginia Woolf
                                      </a>
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="../products/silant-rain-we-are-together.html">
                                        Silant Rain We Are Together
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">Rs. 90.00</span>
                                    </div>
                                  </div>
                                  <div className="theme-product-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="quiqview('silant-rain-we-are-together')"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                            />
                                            <circle
                                              cx={256}
                                              cy={256}
                                              r={80}
                                              fill="none"
                                              stroke="currentColor"
                                              strokeMiterlimit={10}
                                              strokeWidth={32}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                          href="javascript: void(0)"
                                          button-wishlist=""
                                          data-product-handle="silant-rain-we-are-together"
                                          data-toggle="tooltip"
                                          data-placement="left"
                                          title=""
                                        >
                                          <span className="add-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path
                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={32}
                                              />
                                            </svg>
                                          </span>
                                          <span className="loading-wishlist">
                                            <svg
                                              className="loader"
                                              id="Layer_1"
                                              enableBackground="new 0 0 24 24"
                                              height={512}
                                              viewBox="0 0 24 24"
                                              width={512}
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g>
                                                <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                              </g>
                                              <g>
                                                <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                              </g>
                                              <g>
                                                <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                              </g>
                                              <g>
                                                <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                              </g>
                                            </svg>
                                          </span>
                                          <span className="remove-wishlist">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="ionicon"
                                              viewBox="0 0 512 512"
                                            >
                                              <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                            </svg>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          onclick="Shopify.addItem(40344363368528, 1); return false;"
                                          className="theme-product-action-btn"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ionicon"
                                            viewBox="0 0 512 512"
                                          >
                                            <path
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={32}
                                              d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                            />
                                          </svg>
                                        </a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <div
        className="modal fade productModal"
        id="quickViewModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="qwick-view-left">
                    <div className="quick-view-learg-img">
                      <div className="quick-view-tab-content tab-content">
                        <div className="product-main-image__item">
                          <div className="img_box_1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="qwick-view-right product-details-content quickview-content">
                    <div className="qwick-view-content">
                      <h2 className="product_title">FROM_JS</h2>
                      <div className="product-price product-info__price price-part product-details-price">
                        <span className="price-box__new">jsprice</span>
                        <span className="main">jsprice</span>
                      </div>
                      <div className="product-rating pro-details-rating-wrap">
                        <div className="quick-view-rating rating pro-details-rating">
                          FROM_JS
                        </div>
                      </div>
                      <div className="short-description product-des">
                        FROM_JS
                      </div>
                      <form id="add-item-qv" action="" method="post">
                        <div className="quick-view-select variants select-option-part" />
                        <div className="quickview-plus-minus">
                          <div className="cart-plus-minus">
                            <input
                              type="text"
                              defaultValue={0o1}
                              name="quantity"
                              className="cart-plus-minus-box"
                            />
                          </div>
                          <div className="quickview-btn-cart">
                            <button
                              type="submit"
                              className="addtocartqv theme-default-button"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="sli sli-close" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="quickViewModal_info" style={{ display: "none" }}>
        <div className="button">Add to cart</div>
        <div className="button_added">Added</div>
        <div className="button_error">Limit Products</div>
        <div className="button_wait">Wait..</div>
      </div>
    </>
  );
}

export default Shop;
