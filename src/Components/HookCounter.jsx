import React from "react";
import { useState } from "react";

function HookCounter() {
  const [count, SetCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        Count Hook {count}
      </button>
    </div>
  );
}

export default HookCounter;
