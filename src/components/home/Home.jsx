import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/slices/bookSlice";
import "./Home.css";
import { REACT_APP_URL } from "../../config";
import Footer from "../footer/Footer";
function Home() {
  const { loading, books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  useEffect(() => {
    if (loading === "fulfilled") {
      setAllBooks(books);
    }
  }, [loading]);

  return (
    <>
      <div id="preloader_active">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
        </div>
      </div>
      <div id="shopify-section-header" className="shopify-section"></div>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <header className="header-area sticky-bar menu-center">
          <div className="main-header-wrap">
            <div className="container default">
              <div className="row header_custom_row">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo text-left">
                    <a href="index.html" className="theme-logo">
                      <img
                        src="../Images/AsianLogo.jpeg"
                        alt="Asian"
                        style={{ height: "10vh", borderRadius: 10 }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="main-menu">
                    <nav>
                      <ul>
                        <li className="angle-shape">
                          <a
                            href="/"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            Home
                          </a>
                        </li>
                        <li className="angle-shape">
                          <a
                            href="/about-us"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            About Us
                          </a>
                        </li>
                        <li className="angle-shape">
                          <a
                            href="/shop"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            Shop
                          </a>
                        </li>

                        <li className="angle-shape">
                          <a
                            href="/author"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            Authors
                          </a>
                        </li>
                        <li className="angle-shape">
                          <a
                            href="/contact-us"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="header-right-wrap">
                    <div className="header-search">
                      <div className="cart-wrap">
                        <button className="icon-cart-active">
                          <span
                            className="icon-cart HeaderIcons"
                            style={{ fontWeight: 800, letterSpacing: 1 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ionicon"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                                d="M338.29 338.29L448 448"
                              />
                            </svg>
                          </span>
                        </button>
                        <div className="shopping-cart-content">
                          <div
                            className="cart-empty-title"
                            style={{ display: "block" }}
                          >
                            <form
                              action="#"
                              method="get"
                              role="search"
                              className="header-search-box animated jackInTheBox"
                            >
                              <input
                                id="Search"
                                type="search"
                                name="q"
                                defaultValue=""
                                role="combobox"
                                aria-expanded="false"
                                aria-owns="predictive-search-results-list"
                                aria-controls="predictive-search-results-list"
                                aria-haspopup="listbox"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                autoComplete="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                className="header-search-field input-text"
                                placeholder="Search Book"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-wrap">
                      <button className="icon-cart-active">
                        <span
                          className="icon-cart HeaderIcons2"
                          style={{ fontWeight: 800, letterSpacing: 1 }}
                        >
                          <svg
                            cla=""
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                            <path
                              d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                          </svg>
                          <span
                            className="count-style bigcounter"
                            style={{ backgroundColor: "#fff", color: "#000" }}
                          >
                            0
                          </span>
                        </span>
                      </button>
                      <div className="shopping-cart-content">
                        <div className="shopping-cart-top">
                          <h4>Shoping Cart</h4>
                          <a className="cart-close" href="#">
                            <i className="icofont-close-circled" />
                          </a>
                        </div>
                        <ul
                          className="single-product-cart single-cart-item-loop"
                          style={{ display: "none" }}
                        />
                        <div
                          className="single-product-cart shopping-cart-bottom"
                          style={{ display: "none" }}
                        >
                          <div className="shopping-cart-total">
                            <h4>
                              Total:{" "}
                              <span className="shop-total shopping-cart__total">
                                Rs. 0.00
                              </span>
                            </h4>
                          </div>
                          <div className="shopping-cart-btn btn-hover text-center">
                            <a
                              className="default-btn"
                              href="account/loginfc3a.html"
                            >
                              Checkout
                            </a>
                            <a className="default-btn" href="cart.html">
                              View Cart
                            </a>
                          </div>
                        </div>
                        <div
                          className="cart-empty-title"
                          style={{ display: "block" }}
                        >
                          <p>Your cart is empty now.</p>
                        </div>
                      </div>
                    </div>
                    <div className="setting-wrap">
                      <button className="setting-active">
                        <svg
                          className="HeaderIcons1"
                          viewBox="-42 0 512 512.001"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m210.351562 246.632812c33.882813 0 63.21875-12.152343 87.195313-36.128906 23.96875-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.128906 87.195312 23.980469 23.96875 53.316406 36.125 87.191406 36.125zm-65.972656-189.292968c18.394532-18.394532 39.972656-27.335938 65.972656-27.335938 25.996094 0 47.578126 8.941406 65.976563 27.335938 18.394531 18.398437 27.339844 39.980468 27.339844 65.972656 0 26-8.945313 47.578125-27.339844 65.976562-18.398437 18.398438-39.980469 27.339844-65.976563 27.339844-25.992187 0-47.570312-8.945312-65.972656-27.339844-18.398437-18.394531-27.34375-39.976562-27.34375-65.976562 0-25.992188 8.945313-47.574219 27.34375-65.972656zm0 0" />
                          <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.3125-10.339844-7.808594-20.550781-13.375-30.335938-5.769532-10.15625-12.550782-19-20.160157-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.042969 5.339844-10.96875 0-22.085937-1.796876-33.042968-5.339844-11.210938-3.621094-20.300782-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.753906-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.609375 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.0625 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.777344-1.023438 19.953125-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.4375 23.730469 65.066406 23.730469h246.53125c26.621094 0 48.511719-7.984375 65.0625-23.730469 16.757813-15.945312 25.253906-37.589843 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm-44.90625 72.828125c-10.933594 10.40625-25.449218 15.464844-44.378906 15.464844h-246.527344c-18.933594 0-33.449218-5.058594-44.378906-15.460938-10.722656-10.207031-15.933594-24.140625-15.933594-42.585937 0-9.59375.316406-19.066407.949219-28.160157.617187-8.921874 1.878906-18.722656 3.75-29.136718 1.847656-10.285156 4.199219-19.9375 6.996094-28.675782 2.683593-8.378906 6.34375-16.675781 10.882812-24.667968 4.332031-7.617188 9.316407-14.152344 14.816407-19.417969 5.144531-4.925781 11.628906-8.957031 19.269531-11.980469 7.066406-2.796875 15.007812-4.328125 23.628906-4.558594 1.050781.558594 2.921875 1.625 5.953125 3.601563 6.167969 4.019531 13.277344 8.605469 21.136719 13.625 8.859375 5.648437 20.273437 10.75 33.910156 15.152344 13.941406 4.507812 28.160156 6.796875 42.273437 6.796875 14.113282 0 28.335938-2.289063 42.269532-6.792969 13.648437-4.410156 25.058594-9.507813 33.929687-15.164063 8.042969-5.140624 14.953125-9.59375 21.121094-13.617187 3.03125-1.972656 4.902344-3.042969 5.953125-3.601563 8.625.230469 16.566406 1.761719 23.636719 4.558594 7.636719 3.023438 14.121093 7.058594 19.265625 11.980469 5.5 5.261719 10.484375 11.796875 14.816406 19.421875 4.542969 7.988281 8.207031 16.289062 10.886719 24.660156 2.800781 8.75 5.15625 18.398438 7 28.675782 1.867187 10.433593 3.132812 20.238281 3.75 29.144531v.007812c.636719 9.058594.957031 18.527344.960937 28.148438-.003906 18.449219-5.214844 32.378906-15.9375 42.582031zm0 0" />
                        </svg>
                      </button>
                      <div className="setting-content">
                        <ul>
                          <li>
                            {/* <h4>Account</h4> */}
                            <ul>
                              <li>
                                <a href="/becomean-author">Become an Author</a>
                              </li>
                              <li>
                                <a href="/orderForm">Order Form</a>
                              </li>
                              <li>
                                <a href="/login">Login</a>
                              </li>
                              <li>
                                <a href="/register">Create Account</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-small-mobile">
            <div className="container default ">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="mobile-logo">
                    <a href="index.html" className="theme-logo">
                      <img
                        src="../../Assets/shop/files/logo1_130xbe39.png?v=1697996490"
                        alt="Asian"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="header-right-wrap">
                    <div className="cart-wrap">
                      <button className="icon-cart-active">
                        <span className="icon-cart">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                            <path
                              d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                          </svg>
                          <span className="count-style bigcounter">0</span>
                        </span>
                      </button>
                      <div className="shopping-cart-content">
                        <div className="shopping-cart-top">
                          <h4>Shoping Cart</h4>
                          <a className="cart-close" href="#">
                            <i className="icofont-close-circled" />
                          </a>
                        </div>
                        <ul
                          className="single-product-cart single-cart-item-loop"
                          style={{ display: "none" }}
                        />
                        <div
                          className="single-product-cart shopping-cart-bottom"
                          style={{ display: "none" }}
                        >
                          <div className="shopping-cart-total">
                            <h4>
                              Total:{" "}
                              <span className="shop-total shopping-cart__total">
                                Rs. 0.00
                              </span>
                            </h4>
                          </div>
                          <div className="shopping-cart-btn btn-hover text-center">
                            <a
                              className="default-btn"
                              href="account/loginfc3a.html"
                            >
                              Checkout
                            </a>
                            <a className="default-btn" href="cart.html">
                              View Cart
                            </a>
                          </div>
                        </div>
                        <div
                          className="cart-empty-title"
                          style={{ display: "block" }}
                        >
                          <p>Your cart is empty now.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-off-canvas">
                      <a className="mobile-aside-button" href="#">
                        <i className="sli sli-menu" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mobile-off-canvas-active">
          <a className="mobile-aside-close">
            <i className="sli sli-close" />
          </a>
          <div className="header-mobile-aside-wrap">
            <div className="mobile-search">
              <form
                className="search-form"
                action="#"
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
                      <a href="/">Home</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index501f.html?preview_theme_id=122477707344">
                            Home Demo v1
                          </a>
                        </li>
                        <li>
                          <a href="index2c6b.html?preview_theme_id=122478461008">
                            Home Demo v2
                          </a>
                        </li>
                        <li>
                          <a href="index712d.html?preview_theme_id=122478493776">
                            Home Demo v3
                          </a>
                        </li>
                        <li>
                          <a href="index3b70.html?preview_theme_id=122479902800">
                            Home Demo v4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/shop">Shop</a>
                      <ul className="dropdown">
                        <li className="mobile_img_menu">
                          <a href="collections/featured-books.html">
                            <img
                              src="../../Assets/shop/collections/p3f10c.png?v=1698470305"
                              alt="Featured Books"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/featured-books.html" title="">
                              Featured Books
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="collections/best-sellers.html">
                            <img
                              src="Assets/shop/collections/2d8ec.png?v=1698470765"
                              alt="Best Sellers"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/best-sellers.html" title="">
                              Best Sellers
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="collections/most-viewed.html">
                            <img
                              src="Assets/shop/collections/p880c1.png?v=1698470737"
                              alt="Most Viewed"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/most-viewed.html" title="">
                              Most Viewed
                            </a>{" "}
                          </span>
                        </li>
                        <li className="m_mega-menu-li">
                          <a href="collections.html">All Collections</a>
                          <ul className="dropdown">
                            <li>
                              <a href="collections/featured-books.html">
                                Romance
                              </a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">
                                History
                              </a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">Comedy</a>
                            </li>
                            <li>
                              <a href="collections/most-viewed.html">Fiction</a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">
                                Adventure
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blogs/news.html">Blog</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/author">Author</a>
                        </li>
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact us</a>
                        </li>
                        <li>
                          <a href="pages/faq.html">Faq Page</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error Page</a>
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
        <div className="video-overlay" />
        <video autoPlay="" muted="" loop="" style={{ width: "100%" }}>
          <source src="Images/HomeVideo.mp4" type="video/mp4" />
        </video>
        <center>
          <div className="welcome-text">
            <h1
              style={{
                color: "#fff",
                fontWeight: 600,
                letterSpacing: 10,
                textTransform: "uppercase",
                fontSize: 50,
              }}
            >
              Asian Publishers
            </h1>
            <p style={{ color: "#fff", letterSpacing: 2, fontSize: 20 }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
            {/* <div class="show-more-btn_title"> */}
            <a
              className="ban_btn1 banner_style_2"
              href="/shop"
              style={{ backgroundColor: "#DD321E !important" }}
            >
              Shop Now
            </a>
            {/* </div> */}
          </div>
        </center>
      </div>
      <main>
        <div
          id="shopify-section-template--14595761504336__a30e2f27-f19c-4ea6-9e6c-e0862c20c3dc"
          className="shopify-section"
        >
          <div
            className="feature-area"
            id="section-template--14595761504336__a30e2f27-f19c-4ea6-9e6c-e0862c20c3dc"
          >
            <div className="container default ">
              <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-credit-card"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Easy Payment</h4>
                      <p style={{ color: "#000000" }}>
                        Have 100% Secure Payments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-fast-delivery"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Free Delivery</h4>
                      <p style={{ color: "#000000" }}>Order over $300 More</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-read-book"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Availabley</h4>
                      <p style={{ color: "#000000" }}>
                        6 Million Books Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761569872__main"
          className="shopify-section"
          style={{ backgroundColor: "#FAF4EB" }}
        >
          <div
            className="about-story-area"
            id="section-template--14595761569872__main"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="story-img">
                    <div className="ab-wrapper-4 p-relative">
                      <div className="ab-right-img">
                        <img
                          src="../Assets/shop/files/libraryc279.png?v=1698129435"
                          alt=""
                        />
                      </div>
                      <div className="tm-deg-left-meta">
                        <h3>
                          Good Experience <br /> In Last{" "}
                        </h3>
                        <h4>10</h4>
                        <h5>Years</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="story-details">
                    <div className="story-details-top">
                      <h2>
                        Since 1987, We have established ourselves with a strong
                        reputation.
                      </h2>
                    </div>
                    <div className="story-details-bottom">
                      <h4>Win best Book Shop Award At 2023.</h4>
                      <p>
                        Accepting the award visionary founder expressed
                        gratitude for the team's dedication and the patronage of
                        discerning clients who appreciate the finer things in
                        life. This win marks a milestone in journey, solidifying
                        its position as a trailblazer in the realm of exquisite
                        adornments.
                      </p>
                    </div>
                    <a className="ban_btn1 banner_style_2" href="index.html">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
          className="shopify-section"
        >
          <div
            className="product-area pb-150 feature_deal_collection common_slick_slider"
            id="section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
            data-section="Feature_Collection"
          >
            <div className="container default ">
              <div className="section-title text-left pb-30  title_button_show ">
                <h2>Featured Books</h2>
                <div className="deal_count_area_wrap show-more-btn_title">
                  <a
                    className="ban_btn1 banner_style_2"
                    href="/shop"
                    style={{ backgroundColor: "#DD321E !important" }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="product-menu-banner-wrapper row">
                {allBooks &&
                  allBooks.length > 0 &&
                  allBooks.length > 0 &&
                  allBooks.slice(0, 6).map((book, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="arrivals-wrap item-wrapper">
                        <div
                          className="theme-products  feature-product-slider-active carsoule_arrow_style row"
                          data-slick='{
                           "infinite": true,
                           "slidesToShow": 5,
                           "slidesToScroll": 1,
                           "rows":1,
                           "arrows": false,
                           "responsive": [
                           {
                           "breakpoint": 1800,
                           "settings": {
                           "slidesToShow": 5,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 1200,
                           "settings": {
                           "slidesToShow": 4,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 991,
                           "settings": {
                           "slidesToShow": 2,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 767,
                           "settings": {
                           "slidesToShow": 2,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 450,
                           "settings": {
                           "slidesToShow": 1,
                           "slidesToScroll": 1
                           }
                           }
                           ]
                           }'
                        >
                          <div className="col-md-12 ">
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
                                        href="products/first-love-shadows-of-nebula.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          style={{
                                            height: "50%",
                                            width: "50%",
                                          }}
                                          className="popup_cart_image"
                                          src={`${REACT_APP_URL}/Image/${book.image}`}
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
                                      {book.authors &&
                                        book.authors.length > 0 && (
                                          <a href="#" className="remove_href">
                                            {book.authors.map(
                                              (author, index) => (
                                                <span key={author.id}>
                                                  {author.name}
                                                  {index !==
                                                  book.authors.length - 1
                                                    ? ", "
                                                    : ""}
                                                </span>
                                              )
                                            )}
                                          </a>
                                        )}
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="products/first-love-shadows-of-nebula.html">
                                        {book.name}
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">
                                        Rs. {book.mRP}
                                      </span>
                                    </div>
                                    <div className="theme-product-ratting-wrap ">
                                      <span className="theme-product-ratting spr-badge-caption-none">
                                        <span
                                          className="shopify-product-reviews-badge"
                                          data-id={book.id}
                                        />
                                      </span>
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
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__f23eabeb-498a-423f-9f12-647d250a1110"
          className="shopify-section"
        >
          <div
            className="custom-content"
            id="section-template--14595761504336__f23eabeb-498a-423f-9f12-647d250a1110"
          >
            <div className="container default ">
              <div className="row custom-content-align">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="html-content">
                    <div className="html-content-class">
                      <h4 className="text-1"> We Are</h4>
                      <h2>The largest Book Publisher on the planet</h2>
                      <span className="cstm_ul_li">
                        <ul className="trx_addons_list_dot text_link2">
                          <li>Civil Engineering</li>
                          <li>Electrical Engineering</li>
                          <li>Mechanical Engineering</li>
                        </ul>
                        <ul className="trx_addons_list_dot text_link2">
                          <li>Electronics Engineering</li>
                          <li>Computer Science Engineering</li>
                          <li>Information Technology</li>
                        </ul>
                      </span>
                      <a className="btn_main" href="collections/all.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="image-content">
                    <img
                      src="Assets/shop/files/sthm6c13.png?v=1697959738"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__1635682320e743e23b"
          className="shopify-section"
        >
          <div
            className="product-area pb-150 common_slick_slider"
            id="section-template--14595761504336__1635682320e743e23b"
            data-section="Feature_Collection"
          >
            <div className="container default ">
              <div className="section-title text-left  title_button_show   pb-40">
                <h2>New Release Books</h2>
                <div className="show-more-btn_title">
                  <a
                    className="ban_btn1 banner_style_2"
                    href="collections/featured-books.html"
                  >
                    View All Books
                  </a>
                </div>
              </div>
              <div className="product-menu-banner-wrapper row">
                {allBooks &&
                  allBooks.length > 0 &&
                  allBooks.length > 0 &&
                  allBooks.slice(0, 6).map((book, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="arrivals-wrap item-wrapper">
                        <div
                          className="theme-products  feature-product-slider-active carsoule_arrow_style row"
                          data-slick='{
                           "infinite": true,
                           "slidesToShow": 5,
                           "slidesToScroll": 1,
                           "rows":1,
                           "arrows": false,
                           "responsive": [
                           {
                           "breakpoint": 1800,
                           "settings": {
                           "slidesToShow": 5,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 1200,
                           "settings": {
                           "slidesToShow": 4,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 991,
                           "settings": {
                           "slidesToShow": 2,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 767,
                           "settings": {
                           "slidesToShow": 2,
                           "slidesToScroll": 1
                           }
                           },
                           {
                           "breakpoint": 450,
                           "settings": {
                           "slidesToShow": 1,
                           "slidesToScroll": 1
                           }
                           }
                           ]
                           }'
                        >
                          <div className="col-md-12 ">
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
                                        href="products/first-love-shadows-of-nebula.html"
                                        className="theme-product-image"
                                      >
                                        <img
                                          style={{
                                            height: "50%",
                                            width: "50%",
                                          }}
                                          className="popup_cart_image"
                                          src={`${REACT_APP_URL}/Image/${book.image}`}
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
                                      {book.authors &&
                                        book.authors.length > 0 && (
                                          <a href="#" className="remove_href">
                                            {book.authors.map(
                                              (author, index) => (
                                                <span key={author.id}>
                                                  {author.name}
                                                  {index !==
                                                  book.authors.length - 1
                                                    ? ", "
                                                    : ""}
                                                </span>
                                              )
                                            )}
                                          </a>
                                        )}
                                    </div>
                                    <h4 className="theme-product-title popup_cart_title">
                                      <a href="products/first-love-shadows-of-nebula.html">
                                        {book.name}
                                      </a>
                                    </h4>
                                    <div className="theme-product-price ">
                                      <span className="new">
                                        Rs. {book.mRP}
                                      </span>
                                    </div>
                                    <div className="theme-product-ratting-wrap ">
                                      <span className="theme-product-ratting spr-badge-caption-none">
                                        <span
                                          className="shopify-product-reviews-badge"
                                          data-id={book.id}
                                        />
                                      </span>
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
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__16335890543c7ff7c6"
          className="shopify-section"
        >
          <div
            className="blog-area common_slick_slider"
            id="section-template--14595761504336__16335890543c7ff7c6"
            data-section="Latest_Blog"
          >
            <div className="container default ">
              <div className="section-title text-left  title_button_show   pb-40">
                <h2>Our Catagories</h2>
                <div className="show-more-btn_title">
                  <a className="ban_btn1 banner_style_2" href="blogs/news.html">
                    Shop Now
                  </a>
                </div>
              </div>
              <div
                className=" blog-slider-active carsoule_arrow_style row"
                data-slick='{
                  "infinite": true,
                  "slidesToShow": 3,
                  "slidesToScroll": 1,
                  "arrows": false,
                  "responsive": [{
                  "breakpoint": 1600,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 1400,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 1367,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 767,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 458,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 349,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  }
                  ]
                  }'
              >
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/miracle-morning-with-book-store-shopify.html">
                        <img
                          src="Assets/shop/articles/b5_600x400_crop_center788a.jpg?v=1698470014"
                          alt="Miracle morning with Book shopify"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                 <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                 <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                              </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Civil Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/best-book-store-shopify-theme-ever.html">
                        <img
                          src="Assets/shop/articles/b7_600x400_crop_centerd2a5.jpg?v=1698469854"
                          alt="Best Book store shopify theme ever"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Electrical Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/top-5-book-for-world-summit-2023.html">
                        <img
                          src="Assets/shop/articles/b6_600x400_crop_center7251.jpg?v=1698469738"
                          alt="Top 5  Book  for World Summit 2023"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Mechanical Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/a-beautiful-morning-with-my-baby-book.html">
                        <img
                          src="Assets/shop/articles/b3_600x400_crop_center6502.jpg?v=1698469626"
                          alt="A Beautiful Morning with my baby book"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Electronics Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/top-10-books-to-make-it-a-great-year.html">
                        <img
                          src="Assets/shop/articles/b4_600x400_crop_centerf1a2.jpg?v=1698469522"
                          alt="Top 10 Books to Make It a Great Year"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Computer Science Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/novels-changed-our-history.html">
                        <img
                          src="Assets/shop/articles/b2_600x400_crop_center2693.jpg?v=1698469425"
                          alt="Novels changed our history"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Information Technology</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__bc7a5bd5-6193-47a8-9a53-156c9db8ef14"
          className="shopify-section"
        >
          {/*====================  brand logo slider area ====================*/}
          <div
            className="brand-logo-slider-area mb-40 common_slick_slider"
            id="section-template--14595761504336__bc7a5bd5-6193-47a8-9a53-156c9db8ef14"
            data-section="BrandSlider"
          >
            <div className="container default ">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/*=======  brand logo slider wrapper  =======*/}
                  <div className="brand-logo-slider-wrapper brand-logo-slider-wrapper--double-border">
                    <div
                      className="brand_slider_active"
                      data-slick='{
                           "slidesToShow": 5,
                           "arrows": false,
                           "slidesToScroll": 1,
                           "responsive":[
                           {"breakpoint":1800, "settings": {"slidesToShow": 5 }},
                           {"breakpoint":1200, "settings": {"slidesToShow": 4 }},        
                           {"breakpoint":991, "settings": {"slidesToShow": 3 }},
                           {"breakpoint":767, "settings": {"slidesToShow": 2 }},        
                           {"breakpoint":319, "settings": {"slidesToShow": 1 }}
                           ] 
                           }'
                    >
                      {/*=======  single brand logo  =======*/}
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/1.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/11.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/2.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/22.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/3.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/33.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/4.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/44.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/5.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/55.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/6.jpg"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
                      </div>
                      <div
                        className="single-brand-logo"
                        style={{ width: "1%" }}
                      >
                        <a href="#">
                          <img
                            src="Images/Logo/66.png"
                            alt=""
                            style={{ height: "10vh" }}
                          />
                        </a>
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
                      <form id="add-item-qv" action="#" method="post">
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
    </>
  );
}

export default Home;
