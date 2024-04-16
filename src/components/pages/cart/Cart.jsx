import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Cart.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function Cart() {
  return (
    <>
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
      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      <script src="../../Assets/shop/t/9/assets/theme08ca.js?v=58729172318499673551698938089"></script>
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
        <div style={{ height: "16vh" }}>
          <Header />
        </div>
      </div>
      <div className="breadcrumb-area breadcrumbs-section">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="breadcrumb-content text-center breadcrumbs-inner">
              <div className="page-title">
                <h1
                  className="breadcrumbs-title"
                  style={{ textTransform: "unset" }}
                >
                  Cart
                </h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="index.html" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li style={{ textTransform: "unset" }}>Cart</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <br />
        <div
          id="shopify-section-template--14595761635408__main"
          className="shopify-section"
        >
          <div className="contact-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <table className="table table-spriped">
                    <tr>
                      <th style={{fontSize:"18px", width:"20%"}}>Product Description</th>
                      <th></th>
                      <th style={{ textAlign: "right", fontSize:"18px" }}>Qty</th>
                      <th style={{ textAlign: "right", fontSize:"18px" }}>Price</th>
                      <th style={{ textAlign: "right", fontSize:"18px" }}>Sub Total</th>
                      <th style={{ textAlign: "center", fontSize:"18px" }}>Action</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="Assets/shop/collections/2d8ec.png?v=1698470765"
                          alt="Best Sellers"
                          loading="lazy"
                          style={{ height: "10vh" }}
                        />
                      </td>
                      <td style={{fontWeight:"600",fontSize:"18px",}}>Book Name Here</td>
                      <td style={{ textAlign: "right" }}>50</td>
                      <td style={{ textAlign: "right" }}>Rs. 100</td>
                      <td style={{ textAlign: "right" }}>Rs. 5000</td>
                      <td style={{ fontSize:"25px", textAlign: "center" }}><MdOutlineRemoveShoppingCart /></td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="Assets/shop/collections/p880c1.png?v=1698470737"
                          alt="Best Sellers"
                          loading="lazy"
                          style={{ height: "10vh" }}
                        />
                      </td>
                      <td style={{fontWeight:"600",fontSize:"18px",}}>Book Name Here</td>
                      <td style={{ textAlign: "right" }}>20</td>
                      <td style={{ textAlign: "right" }}>Rs. 200</td>
                      <td style={{ textAlign: "right" }}>Rs. 4000</td>
                      <td style={{ fontSize:"25px", textAlign: "center" }}><MdOutlineRemoveShoppingCart /></td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <th></th>
                      <th style={{ textAlign: "right" }}>70</th>
                      <th style={{ textAlign: "right" }}>Rs. 300</th>
                      <th style={{ textAlign: "right" }}>Rs. 9000</th>
                      <th></th>
                    </tr>
                  </table>
<br></br>
<center>
                  <a className="ban_btn1 banner_style_2" href="index.html">
                      Checkout Now
                    </a>
                    </center>
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

export default Cart;
