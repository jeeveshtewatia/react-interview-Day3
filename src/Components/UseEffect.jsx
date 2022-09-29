import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`This is use effect`);
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  //   }, []); //this will run only one time

  //   const tick = () => {
  //     setCount((preCount) => preCount + 1);
  //   };
  //   useEffect(() => {
  //     console.log(`This is use effect`);
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   });
  return <div>{count}</div>;
};

export default IntervalHookCounter;
