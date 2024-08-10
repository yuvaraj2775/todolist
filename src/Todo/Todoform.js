import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";





const Todoform = ({ task, togglecomplete,  edittodo, Opnemodel }) => {
  console.log(task)





  return (
    <div className='flex flex-col justify-center items-center	 border-2 border-black w-80 	border-collapse	rounded-md		'>


      <table className=' border-collapse'>
        <tr>
          <td> <p className={`${task.completed ? 'completed' : ""} m-3 w-44  `} onClick={() => togglecomplete(task.id)}>{task.task}</p></td>

          <td className='border-l-2 border-black w-14'><button className='' onClick={() => Opnemodel(task.id)} ><  MdDelete /></button></td>
          <td className='border-l-2 border-black'> <button onClick={() => edittodo(task.id)}  >  <    RiFileEditLine /></button></td>
        </tr>



      </table>










      {/* <span onclick={ ()=>deletetodo(task.id)} > <  MdDelete /></span>
            <span onClick={()=>edittodo(task.id) }> <    RiFileEditLine /></span> */}


    </div>
  )
}

export default Todoform