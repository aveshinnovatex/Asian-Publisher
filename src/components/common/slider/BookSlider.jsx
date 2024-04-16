// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../roomideas/roomCatalogue.css";
// import { REACT_APP_URL } from "../../../config";

// const BookSlider = ({ slider, type = "" }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 5000, //
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="row">
//       <div className="col-sm-12">
//         <div id="customers-testimonials" className="owl-carousel">
//           {slider.length === 1 ? (
//             <CarousalItem image={slider[0]} type={type} />
//           ) : (
//             <Slider {...settings}>
//               {slider.map((item, index) => (
//                 <CarousalItem key={index} image={item} type={type} />
//               ))}
//             </Slider>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CarousalItem = ({ image, type }) => {
//   return (
//     <div className="shadow-effect">
//       <div
//         style={{
//           textAlign: "center",
//           // backgroundColor: "#fff",
//           borderRadius: "10px",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             display: "inline-block",
//             borderRadius: "10px",
//           }}
//         >
//           {console.log("typetype", type)}
//           <img
//             className="img-fluid"
//             loading="lazy"
//             src={`${REACT_APP_URL}/images/${type}/${image}`}
//             alt=""
//             style={{
//               width: "100%",
//               // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
//               height: "50vh",
//               borderRadius: "10px",
//             }}
//           />
//           <div
//             className="gradient-overlay"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               background:
//                 "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
//               borderRadius: "10px",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookSlider;
