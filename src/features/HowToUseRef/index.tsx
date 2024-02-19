import { useState, useRef } from 'react'

export const HowToUserRef = () => {

  const [count, setCount] = useState<number>(0)
  const useR = useRef(0);


  const handleAdd = () => {
    setCount(count + 1)
    useR.current++

    //console.log("State:" + count)
    console.log("Ref:" + useR.current)
  }
  return (
    <div>
      {useR.current}
      <button onClick={handleAdd}>Count</button>

    </div>
  )
}
