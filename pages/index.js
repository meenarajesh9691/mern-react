
import React, { useState } from 'react'

const index = () => {
  //javascript logic
  let [myName, setName] = useState("Rajesh");

  let changeName = () => {
    setName("Rajesh meena");
    console.log("Done click button");
  };

  return (
    <>
      <h1>{myName}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default index