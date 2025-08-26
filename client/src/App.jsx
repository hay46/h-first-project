import React from "react";
import "./App.css";
import Header from "./componenet/header/Header";
import Home from "./componenet/home/Home";
function App() {
  return (
    <div>
      <Header />
      <div className="abebe">
        <div className="web-development">
          <Home
            id="🛏️"
            title="Comfortable Rooms"
            para="Modern, clean, and peaceful spaces designed for your ultimate relaxation."
            read="Read more"
          />
          <Home
            id="🌐"
            title="Complimentary Wi-Fi"
            para="Stay connected with high-speed internet access available throughout the"
            read="Read more"
          />
          <Home
            id="🛎️"
            title="24/7 Dedicated Service"
            para="Our friendly and professional team is always available to assist you."
            read="Read more"
          />
        </div>

        <div className="on-timet">
          <Home
            id="🍽️"
            title="Authentic Ethiopian Cuisine"
            para="Savor delicious local dishes prepared with fresh, traditional ingredients."
            read="Read more"
          />
          <Home
            id="🚘"
            title="Airport/City Pickup"
            para="Convenient and reliable transport services to and from our hotel."
            read="Read more"
          />
          <Home
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
        </div>
      </div>
      <div className="our-comfortabl">
        <h1>Our Comfortable Rooms & Suites</h1>
        <p>
          Discover a variety of beautifully appointed rooms designed for your
          comfort <br /> and convenience, each offering a unique experience
          during your stay in dessie.
        </p>
      </div>
      <div className="our-comfortabl-rooms">
        <div className="our-comfortabl-rooms-suites">
          <Home
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
          <Home
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
          <Home
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
        </div>
        <div className="Executive-Studio">
          <Home
            id="🏞️"
            title="Lake Tana Views"
            para="Wake up to breathtaking panoramic views of the majestic Lake Tana."
            read="Read more"
          />
        </div>
      </div>
      <div className="view-all">
        <button>view all Rooms & Book</button>
      </div>
    </div>
  );
}

export default App;
