import React, { useContext, useEffect, useState } from "react";
// import { noOfItemContext } from "./Header/noOfItemContext";
import { countContext } from "../App";

import "./Css/Food.css";
import "./Css/Header.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Fooder } from "./Fooder";
// import { Burger } from "./FoodPages/Burger";
// import { Pizza } from "./FoodPages/Pizza";

export const FoodLoade = () => {
  const [noOfItem, setNoOfItem] = useContext(countContext);
  const [burger, setBurger] = useState([{}]);
  const [Pizzas, setPizza] = useState([{}]);
  const [foodItem, setFoodItem] = useState([{}]);

  async function loadData(dataName) {
    const URL = `https://adorable-bat-fatigues.cyclic.app/${dataName}`;
    const responce = await fetch(URL);
    const data = await responce.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    loadData("burgers").then((burger) => {
      setBurger(burger);
      setFoodItem(burger);
    });
    loadData("pizzas").then((pizza) => setPizza(pizza));
  }, []);

  return (
    <div className="Food-container">
      <div className="food-nav-container">
        <div className="food-nav">
          <ul>
            <li>
              <Link onClick={() => setFoodItem(burger)}>Burger</Link>
            </li>
            <li>
              <Link onClick={() => setFoodItem(Pizzas)}>Pizza</Link>
            </li>
            <li>
              <Link>Chocolates</Link>
            </li>
            <li>
              <Link>Fried-chicken</Link>{" "}
            </li>
            <li>
              <Link>ice-cream</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="food-container">
        {foodItem.map((data, index) => (
          <div className="card" id={index}>
            <div className="card-img">
              <img src={data.img} alt="" />
              <h3>Food name: {data.name}</h3>
              <h4>
                Rating: <i class="bi bi-star-fill"></i> {data.rate}
              </h4>
              <h4> Price: Rs.${data.price}</h4>
              <p>Description: {data.dsc}</p>
              <button onClick={() => setNoOfItem(noOfItem + 1)}>
                Add Card <i class="bi bi-cart-check-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Food = () => {
  return (
    <div className="Food">
      <FoodLoade></FoodLoade>
      <Fooder></Fooder>
    </div>
  );
};
