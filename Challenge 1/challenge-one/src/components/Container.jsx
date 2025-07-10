import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="container mx-auto w-[300px] mt-2.5 border-5  border-black">
        {children}
      </div>
    </>
  );
};

export default Container;
