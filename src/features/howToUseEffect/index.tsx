import { useState, useEffect } from 'react'

export const HowToUseEffectOne = () => {
  const [counter, setCounter] = useState<number>(0);



  useEffect(() => {
    console.log("ComponentDidMount")
    return () => {
      console.log("ComponentWillAmount");
    }
  }, [counter])


  return (
    <div>
      <p>This is the counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}
