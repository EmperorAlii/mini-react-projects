import React from "react";
import Pizza from "../components/Pizza";
import spinaci from "../assets/pizzas/spinaci.jpg";
import Funghi from "../assets/pizzas/Funghi.jpg";
import { pizzaData } from "../App";

const Menu = () => {
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName={spinaci}
          price={10}
        />

        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          photoName={Funghi}
          price={12}
        /> */}
      </main>
    </>
  );
};

export default Menu;
