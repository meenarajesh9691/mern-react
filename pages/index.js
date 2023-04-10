
import React, { useState } from 'react'

const index = () => {
  //javascript logic
  let [myName, setName] = useState("Rajesh");
  const [Time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  let changeName = () => {
    setName("Rajesh meena");
    console.log("Done click button");


  };

  return (
    <>
      <h1>{myName}</h1>
      <h2>{Time}</h2>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default index