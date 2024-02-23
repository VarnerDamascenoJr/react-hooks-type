import { useState } from 'react'

export const index = (props: {}) => {
  const [op, setOp] = useState<number>(0)
  return (
    <div>
      <button >1</button>
      <button>2</button>
    </div>
  )
}
