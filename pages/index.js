
import React, { useState } from 'react'

const index = () => {
  //javascript logic
  const [Time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);


  return (
    <>
      <h2>{Time}</h2>
    </>
  )
}

export default index