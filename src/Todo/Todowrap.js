import React, { useState } from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import Todoform from './Todoform'
import Dialog from '../Todo/dialog'

import Editting from './Editting'


uuidv4()


export default function Todowrap() {

    const [todo, setodo] = useState([])
    let [isOpen, setIsOpen] = useState(false)
    const [deleteid, setdeletid] = useState(null)

    
    const addTodo = todos => {
        setodo([...todo, { id: uuidv4(), task: todos, completed: false, isediting: false }])
        console.log(todo)


    }
    const togglecomplete = id => {
        setodo(todo.map(todos => todos.id === id ? { ...todos, completed: !todos.completed } : todos))
    }

    const deletetodo = id => {


        setodo(todo.filter(todos => todos.id != id))



    }
    const Opnemodel = (id) => {
        setdeletid(id)
        setIsOpen(true)
    }

    function close() {
        deletetodo(deleteid)
        setIsOpen(false)

    }

    function cancleclose(){
        setIsOpen(false)
    }



    const edittodo = id => {
        setodo(todo.map(todos => todos.id === id ? { ...todos, isediting: !todos.isediting } : todos))
    }

    const edittask = (task, id) => {
        setodo(todo.map(todos => todos.id === id ? { ...todos, task, isediting: !todos.isediting } : todos))
    }


    function open() {
        setIsOpen(true)
    }

    return (

        <div>

            <div className='flex flex-col items-center justify-center mt-10' >


                <Dialog isOpen={isOpen} setIsOpen={setIsOpen} close={close}  cancleclose={cancleclose}/>

                <Todo addTodo={addTodo} />

                {
                    todo.map((todos, index) => (
                        todos.isediting ? (
                            // <Edit edittodo={edittask} task={todos} />
                            // <Edit edittodo={edittask} task={todos} />
                            // <Editting edittodo={edittask} task={todos} />
                            <Editting edittodo={edittask} task={todos} />
                        ) : (<Todoform task={todos} key={index}
                            togglecomplete={togglecomplete}
                            deletetodo={deletetodo}
                            edittodo={edittodo}
                            Opnemodel={Opnemodel}
                            close={close}
                        />)

                    )

                    )
                }




            </div>


        </div>
    )
}
