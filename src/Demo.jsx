import React, { useEffect, useState } from 'react'

function Demo() {

  useEffect(() => {
    console.log("hello");
    fetch("https://6300faaee71700618a325118.mockapi.io/api/v1/:users").then(() => {
      console.log("fetch")
    })
  }, [])

  useEffect(() => {
    return () => {
      console.log("Destroy")
    }
  }, [])

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("timer update")
  }, [timer])

  return (
    <div>
      <button onClick={() => setTimer(timer + 1)}>+++</button>
      {timer}
      <button onClick={() => setTimer(timer - 1)}>----</button>
    </div>
  )
}

export default Demo
