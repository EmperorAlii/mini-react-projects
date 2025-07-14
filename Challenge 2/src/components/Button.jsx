import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-25 h-10 rounded-2xl bg-black font-bold text-2xl text-center text-white my-auto border-amber-200 border-4"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
