import React,{useState} from 'react'




const Editting = ({edittodo,task}) => {


    const [value,setvalue]=useState(task.task)
  
  

  

  const handleclick = (event)=>{
    event.preventDefault();
    edittodo(value,task.id)
    setvalue("")

    
  }
    
 
   


  return (
    <div>
         <form action="" onSubmit={handleclick}>
          <div className='flex border-2 border-black w-80 	border-collapse	rounded-md	'>
        <input type="text" className=' w-80 h-12 ml-2			 border-none' value={value}  placeholder='updated task' name="" id="" onChange={(e)=>setvalue(e.target.value)} />
        
        
        
        <button className='	' >change</button>

        </div>


        </form> 


        
        

    </div>
  )
}

export default Editting