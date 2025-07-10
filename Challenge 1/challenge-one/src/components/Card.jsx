import React from "react";
import Container from "./Container";
import Description from "./Description";
import Skills from "./Skills";

const Card = () => {
  return (
    <>
      <Container>
        <Description />
        <Skills />
      </Container>
    </>
  );
};

export default Card;
