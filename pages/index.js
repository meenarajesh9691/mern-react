
import React, { useState } from 'react'

const index = () => {
  //javascript logic

  let [myName, setName] = useState("Rajesh")


 

  // let myName = "rajesh";

let changeName = ()=>{
  setName("Rajesh meena");
  console.log("Done click button");

  //  let setName = "rajesh meena";
  //  console.log(setName);
};

  return (
    <>
      <h1>{myName}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default index