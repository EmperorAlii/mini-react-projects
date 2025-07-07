import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("We are closed");
  return (
    <>
      <h1> {new Date().toLocaleTimeString()}.We Are Currently Open</h1>
    </>
  );
};

export default Footer;
