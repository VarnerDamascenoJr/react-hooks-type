import { useState } from "react";


type numberFunc = () => void;


export const HowToUseState = () => {
  const [count, setCount] = useState<number>(0);

  const incrementNumber: numberFunc = () => {
    return setCount(count => count + 1);
  }
  return (
    <div>
      {count}<button onClick={incrementNumber}>Increment</button>
    </div>
  )
}
