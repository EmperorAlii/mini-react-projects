import React, { useState } from "react";
import Button from "./Button";

const DateTimeUpdater = () => {
  const currentDate = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(currentDate);

  function handleIncreaseStep() {
    setStep((prev) => prev + 1);
  }

  function handleDecreaseStep() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  function handleIncreaseCount() {
    setCount((prevCount) => {
      const newCount = prevCount + step;
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + newCount);
      setDate(newDate);
      return newCount;
    });
  }

  function handleDecreaseCount() {
    setCount((prevCount) => {
      const newCount = prevCount - step;
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + newCount);
      setDate(newDate);
      return newCount;
    });
  }

  return (
    <>
      <div className="flex gap-2 my-6 ml-150 ">
        <Button onClick={handleDecreaseStep}> - </Button>
        <h1 className="text-2xl">Step: {step}</h1>
        <Button onClick={handleIncreaseStep}> + </Button>
      </div>
      <div className="flex gap-2 my-6 ml-148 mt-1.5">
        <Button onClick={handleDecreaseCount}> - </Button>
        <h1 className="text-2xl">Count: {count}</h1>
        <Button onClick={handleIncreaseCount}> + </Button>
      </div>

      <p className="text-2xl ml-160">
        {count !== 0
          ? `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} ${
              count > 0 ? "from today is" : "ago was"
            } ${date.toDateString()}`
          : "Today is " + date.toDateString()}
      </p>
    </>
  );
};

export default DateTimeUpdater;
