import React from "react";
import "./Css/Home.css";
import img from "../assets/pizza-png-15.png";
export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>your faourite food delivery & Fresh</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          numquam ad obcaecati perferendis et voluptatem provident, aliquid
          incidunt atque odio perspiciatis ullam cupiditate voluptatum vel
          molestias quod inventore odit nam.
        </p>

        <button>Order Now</button>
      </div>
      <div className="home-image">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
