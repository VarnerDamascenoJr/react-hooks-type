import { useState, useEffect } from 'react'

type FetchProps = {
  url: any;
}

const useFetch = ({ url }: FetchProps) => {
  const [data, setData] = useState<string[]>()

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => setData(data))
  }, [data])

  return [data]
}

export default useFetch;
