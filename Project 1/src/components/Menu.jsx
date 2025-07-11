import React from "react";
import Pizza from "../components/Pizza";
import spinaci from "../assets/pizzas/spinaci.jpg";
import Funghi from "../assets/pizzas/Funghi.jpg";
import { pizzaData } from "../App";

const Menu = () => {
  const pizzas = pizzaData;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzas.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : null}
      </main>
    </>
  );
};

export default Menu;
