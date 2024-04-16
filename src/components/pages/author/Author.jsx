import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Author.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { countBooksByAuthor } from "../../../redux/slices/authorSlice";
import { REACT_APP_URL } from "../../../config/config";

function Author() {
  const { loading, countBookauthor } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const [countBookByAuthor, setCountBookByAuthor] = useState([]);
  useEffect(() => {
    dispatch(countBooksByAuthor());
  }, [dispatch]);
  useEffect(() => {
    if (loading === "fulfilled") {
      setCountBookByAuthor(countBookauthor);
    }
  }, [loading]);

  return (
    <>
      <title>Authors - Asian Publishers</title>
      {/* CSS */}
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
      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      <script src="../../Assets/shop/t/9/assets/theme08ca.js?v=58729172318499673551698938089"></script>

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
                      <a href="/">Home</a>
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
                          <a href="../collections/featured-books.html">
                            <img
                              src="../Assets/shop/collections/p3f10c.png?v=1698470305"
                              alt="Featured Books"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a
                              href="../collections/featured-books.html"
                              title=""
                            >
                              Featured Books
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="../collections/best-sellers.html">
                            <img
                              src="../Assets/shop/collections/2d8ec.png?v=1698470765"
                              alt="Best Sellers"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="../collections/best-sellers.html" title="">
                              Best Sellers
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="../collections/most-viewed.html">
                            <img
                              src="../Assets/shop/collections/p880c1.png?v=1698470737"
                              alt="Most Viewed"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="../collections/most-viewed.html" title="">
                              Most Viewed
                            </a>{" "}
                          </span>
                        </li>
                        <li className="m_mega-menu-li">
                          <a href="../collections.html">All Collections</a>
                          <ul className="dropdown">
                            <li>
                              <a href="../collections/featured-books.html">
                                Romance
                              </a>
                            </li>
                            <li>
                              <a href="../collections/best-sellers.html">
                                History
                              </a>
                            </li>
                            <li>
                              <a href="../collections/best-sellers.html">
                                Comedy
                              </a>
                            </li>
                            <li>
                              <a href="../collections/most-viewed.html">
                                Fiction
                              </a>
                            </li>
                            <li>
                              <a href="../collections/best-sellers.html">
                                Adventure
                              </a>
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
                          <a href="/author">Authors</a>
                        </li>
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact us</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq Page</a>
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
                <h1 className="breadcrumbs-title">Authors list</h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li>Authors list</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <div
          id="shopify-section-template--14595761602640__e5bea2ba-dc5b-4b9a-bda3-2860db263594"
          className="shopify-section"
        >
          <div
            className="best_collection_area common_slick_slider"
            id="section-template--14595761602640__e5bea2ba-dc5b-4b9a-bda3-2860db263594"
            data-section="Bestx_Collections"
          >
            <div className="container default ">
              <div
                className="row"
                data-slick='{
  
    "infinite": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    
    	"arrows": true,
    	"prevArrow": "<span class=&apos;product-dec-icon product-dec-prev&apos;><i class=&apos;sli sli-arrow-left&apos;></i></span>",
    	"nextArrow": "<span class=&apos;product-dec-icon product-dec-next&apos;><i class=&apos;sli sli-arrow-right&apos;></i></span>",
    
    
    "responsive": [
    {
"breakpoint": 1370,
"settings": {
"slidesToShow": 4,
"slidesToScroll": 1
}
    },
    {
"breakpoint": 991,
"settings": {
"slidesToShow": 6,
"slidesToScroll": 1
}
    },
    {
"breakpoint": 575,
"settings": {
"slidesToShow": 1,
"slidesToScroll": 1
}
    }
    ] 

    }'
              >
                {countBookByAuthor &&
                  countBookByAuthor.length > 0 &&
                  countBookByAuthor.map((author, index) => (
                    <div
                      key={index}
                      className="  col-lg-3 col-md-4 col-sm-6 col-12  block_template--14588627386448__e5bea2ba-dc5b-4b9a-bda3-2860db263594-collection-1"
                    >
                      <div className="single_collection mb-30 text-center  large__size">
                        <a href="../collections/best-sellers.html">
                          <img
                            src="../Assets/shop/files/at1_96461cdb-1ecd-4c69-a00f-75a9000a26a4dbb6.jpg?v=1698484178"
                            alt=""
                          />
                        </a>
                        <div className="banner-common best-coll-content">
                          <h4 className="multi_top ">
                            <a
                              className="ban_btn1"
                              href="../collections/best-sellers.html"
                            >
                              {author.name}
                            </a>
                          </h4>
                          <a href="#">
                            <span className="subtitle_with_count">
                              <span>{author.bookCount} </span>
                              <p className="multi_bottom">Published Book</p>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761602640__99e9124f-954e-40d8-82a2-001d7fba9a10"
          className="shopify-section"
        >
          <div
            className="banner-area countdown_promotion_banner"
            id="section-template--14595761602640__99e9124f-954e-40d8-82a2-001d7fba9a10"
          >
            <div className="container default ">
              <div className="row align-items-center text-left left-def">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="banner-bg-content scroll-zoom">
                    <h2>Feel Free To Contact Us For Any Book</h2>
                    <div className="count_down_wrapper  ">
                      <div data-countdown="2024/11/11" />
                    </div>
                    <a className="ban_btn1 banner_style_2" href="/contact-us">
                      Contact Now
                    </a>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="banner-img-2 pr-10 scroll-zoom promotion_video_btn">
                    <a href="#">
                      <img
                        className="animated"
                        src="../Assets/shop/files/jhjhj_66f84977-da32-438e-867d-05a07f41a4f3eb7c.png?v=1698485564"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Author;
