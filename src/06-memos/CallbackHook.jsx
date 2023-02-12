import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback((value) => {
    setCounter((count) => count + value)
  }, [])


  useEffect(() => {
    // incrementFather(5)
  }, [incrementFather])
  
  // const incrementFather = () => setCounter(counter + 1)

  return (
    <>
      <h2>UseCallBack Hook: {counter}</h2>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}
