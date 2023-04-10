
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const index = () => {
  //javascript logic
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")

  
  const CreateTaskHandler = (e)=>{
    e.preventDefault();
    const todo ={
      id:nanoid(),
      Title:Title,
      Description:Desc
    };
    console.log(todo);
  };
  //  let chnageHandler = (e)=> setTitle(e.target.value);

  return (
    <>
      <div className="container bg-light w-50 mt-5 p-5">
        <h1 className='mb-4'>Todo-App</h1>

        <form action="" onSubmit={CreateTaskHandler}>
          <input className='form-control mb-4' type="text" placeholder='Title'  
             onChange={(e) => setTitle(e.target.value)}
             value={Title}
          />


          <input className='form-control' type="text" placeholder='Description' onChange={(e) => setDesc(e.target.value)} 
          value={Desc}
          />
          
          <button className='btn btn-primary mt-3'>Create Task</button>
        </form>
        <hr />
        <ul>
          <h3 className='text-danger fw-light'>Pending Tasks</h3>
          <li className='d-flex justify-content-between fs-3'>title 1<i className="text-danger ri-delete-bin-2-line"></i></li>
        </ul>
      </div>
    </>
  )
}

export default index