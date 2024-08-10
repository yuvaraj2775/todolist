import React, { useState } from 'react'
import './Todo.css'



const Todo = ({ addTodo }) => {


  const [value, setvalue] = useState("")





  const handleclick = (event) => {
    event.preventDefault();
    addTodo(value)
    setvalue("")


  }





  return (
    <div className='relative p-4 mx-auto	flex items-center justify-center border-2 border-black w-80 h-full rounded-md bg-sky-800	 bg-gradient-to-r from-purple-500 to-pink-500	'  >
      <form action="" className='mt-2 flex items-center h-full' onSubmit={handleclick}>

        <input type="text" className='border-2 border-none ml-2 rounded-xl px-3 h-12 w-full bg-indigo-100	' value={value} placeholder='write anything' name="" id="" onChange={(e) => setvalue(e.target.value)} />



        <button className='ml-2 px-2 py-2 bg-indigo-600'>submit</button>


      </form>





    </div>
  )
}

export default Todo