import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const HookMemo = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const icnrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const icnrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 99999999) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  //   const isEven=()=>{
  //     let i = 0;
  //     while (i < 99999) i++;
  //     return counterOne % 2 === 0;
  //   }
  return (
    <div>
      <div>
        <button onClick={icnrementOne}>Counter One = {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"} </span>
      </div>
      <div>
        <button onClick={icnrementTwo}> Counter Two = {counterTwo}</button>
      </div>
    </div>
  );
};

export default HookMemo;
