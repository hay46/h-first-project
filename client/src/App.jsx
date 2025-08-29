// import React from "react";
// import "./App.css";
// import Header from "./componenet/header/Header";
// import { Routes, Route } from "react-router-dom";
// import Home from "./componenet/home/Home";
// import Photo from "./componenet/home/photo/Photo";
// import Service from "./componenet/home/photo/Service"
// import Contact from "./componenet/home/photo/Contact";
// import Please from "./componenet/home/photo/Please/"
// import Input from "./componenet/home/photo/Input/"
// import Footer from "./componenet/footer/Footer";
// function App() {
//   return (
//     <div>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<Photo />} />
//         <Route path="/Rooms" element={<Service />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Gallery" element={<Please />} />
//       </Routes>

      // <div className="abebe">
      //   <div className="web-development">
      //     <Home
      //       id="🛏️"
      //       title="Comfortable Rooms"
      //       para="Modern, clean, and peaceful spaces designed for your ultimate relaxation."
      //       read="Read more"
      //     />
      //     <Home
      //       id="🌐"
      //       title="Complimentary Wi-Fi"
      //       para="Stay connected with high-speed internet access available throughout the"
      //       read="Read more"
      //     />
      //     <Home
      //       id="🛎️"
      //       title="24/7 Dedicated Service"
      //       para="Our friendly and professional team is always available to assist you."
      //       read="Read more"
      //     />
      //   </div>

      //   <div className="on-timet">
      //     <Home
      //       id="🍽️"
      //       title="Authentic Ethiopian Cuisine"
      //       para="Savor delicious local dishes prepared with fresh, traditional ingredients."
      //       read="Read more"
      //     />
      //     <Home
      //       id="🚘"
      //       title="Airport/City Pickup"
      //       para="Convenient and reliable transport services to and from our hotel."
      //       read="Read more"
      //     />
      //     <Home
      //       id="🏞️"
      //       title="Lake Tana Views"
      //       para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
      //       read="Read more"
      //     />
      //   </div>
      // </div>
      // <div className="our-comfortabl">
      //   <h1>Our Comfortable Rooms & Suites</h1>
      //   <p>
      //     Discover a variety of beautifully appointed rooms designed for your
      //     comfort <br /> and convenience, each offering a unique experience
      //     during your stay in dessie.
      //   </p>
      // </div>
//       <div className="our-comfortabl-rooms">
//         <div className="our-comfortabl-rooms-suites">
//           <Home
//             id="🏞️"
//             title="Lake Tana Views"
//             para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
//             read="Read more"
//           />
//           <Home
//             id="🏞️"
//             title="Lake Tana Views"
//             para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
//             read="Read more"
//           />
//           <Home
//             id="🏞️"
//             title="Lake Tana Views"
//             para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
//             read="Read more"
//           />
//         </div>
//         <div className="Executive-Studio">
//           <Home
//             id="🏞️"
//             title="Lake Tana Views"
//             para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
//             read="Read more"
//           />
//         </div>
//       </div>
//       <Photo />
//       <div className="alemu">
//         <button>Explore LodgeLink & Book Your Stay</button>
//         <h1>What Our Guests Say</h1>
//       </div>
//       <div className="As-a-frequent">
//         <Service
//           id="★★★★☆"
//           para="As a frequent traveler to Dessie, LodgeLink has become my go-to. The quiet ambiance, delicious local food, and convenient airport pickup service make it stand out. Ethiopian hospitality at its best!"
//           read="-pro.elishaday.Z"
//         />
//         <Service
//           id="★★★★★"
//           para="LodgeLink dessie exceeded all my expectations! The rooms were incredibly clean and comfortable, and the staff were exceptionally friendly and helpful. A truly peaceful stay near Lake Tana."
//           read="-Dr.abebe.F"
//         />
//         <Service
//           id="★★★★☆"
//           para="Our family had a wonderful time. The service was impeccable, and they went above and beyond to ensure our kids were comfortable. Highly recommend LodgeLink for a memorable trip."
//           read="-Mr.alemayew.W"
//         />
//         <div className="Great-value">
//           <Service
//             id="★★★★☆"
//             para="Great value for money! The location is perfect for exploring Bahir Dar, and the free Wi-Fi was a lifesaver. I particularly enjoyed the breakfast and the beautiful garden."
//             read="-pro.Mesifin.E"
//           />
//         </div>
//       </div>
//       <Contact />
//       <Please />
//       <Input />
//       <Footer />
//     </div>
//   );
// }

// export default App;






// 







// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import Header from "./componenet/header/Header";
// import Home from "./componenet/home/Home";
// import TestimonialsWrapper from "./componenet/Testimonialswrapper";
// import Rooms from "./componenet/Rooms/Rooms";
// import Gallery from "./componenet/gallery/Gallery"
// import Testimonials from "./componenet/Testimonials/Testimonials";
// import Contact from "./componenet/contact/Contact";
// import Footer from "./componenet/footer/Footer";
// // ==== APP MAIN ====
// function App() {
//   return (
//     <div className="app-container">
//       <Header />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/rooms" element={<Rooms />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <div className="main-content-hero">
//         <div className="main-content">
//           <section className="hero">
//             <h1>Your Comfort Starts at LodgeLink dessie</h1>
//             <p>Affordable, clean, and peaceful stay near Lake Tana.</p>
//             <button className="cta-btn">Check Availability</button>
//           </section>

//           <section>
//             <h2 className="section-title">Why Choose Us?</h2>
//             <div className="features-grid">
//               <div className="card">✨ Modern Rooms</div>
//               <div className="card">🥘 Delicious Food</div>
//               <div className="card">📶 Free Wi-Fi</div>
//               <div className="card">🚗 Easy Transport</div>
//             </div>
//           </section>
//         </div>
//       </div>

//       <div className="abebe">
//         <div className="web-development">
//           <Home
//             id="🛏️"
//             title="Comfortable Rooms"
//             para="Modern, clean, and peaceful spaces designed for your ultimate relaxation."
//             read="Read more"
//           />
//           <Home
//             id="🌐"
//             title="Complimentary Wi-Fi"
//             para="Stay connected with high-speed internet access available throughout the"
//             read="Read more"
//           />
//           <Home
//             id="🛎️"
//             title="24/7 Dedicated Service"
//             para="Our friendly and professional team is always available to assist you."
//             read="Read more"
//           />
//         </div>

//         <div className="on-timet">
//           <Home
//             id="🍽️"
//             title="Authentic Ethiopian Cuisine"
//             para="Savor delicious local dishes prepared with fresh, traditional ingredients."
//             read="Read more"
//           />
//           <Home
//             id="🚘"
//             title="Airport/City Pickup"
//             para="Convenient and reliable transport services to and from our hotel."
//             read="Read more"
//           />
//           <Home
//             id="🏞️"
//             title="Lake Tana Views"
//             para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
//             read="Read more"
//           />
//         </div>
//       </div>
//       <div className="our-comfortabl">
//         <h1>Our Comfortable Rooms & Suites</h1>
//         <p>
//           Discover a variety of beautifully appointed rooms designed for your
//           comfort <br /> and convenience, each offering a unique experience
//           during your stay in dessie.
//         </p>
//       </div>
//       <TestimonialsWrapper />
//       <Rooms />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// export default App;




import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components

import Footer from "./componenet/footer/Footer.jsx"
import HomePage from "./component/pages/HomePage.jsx";
import Rooms from "./componenet/rooms/Rooms.jsx";
import Gallery from "./component/gallery/Gallery.jsx";
import Testimonials from "./component/testimonials/TestimonialsWrapper.jsx";
import Contact from "./component/contact/Contact.jsx";
import Header from "./componenet/header/Header.jsx"
function App() {
  return (
    <div className="app-container">
      <Header />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;






















