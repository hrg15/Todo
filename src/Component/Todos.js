import React from 'react'
import '../style.css';
import { BiCheck } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const Todos = ({text , date , todo , setCompleted , deleteHandle }) => {
    
    return (
        <div>
            <li className="todos">
                <div className={`text ${todo.completed ? "completed" : ""}`}>
                <h3>{text}</h3>
                </div>
                <div className="meta">
                    <p className="todo-date">{date}</p>
                    <button onClick={()=>setCompleted(todo.key)}> <BiCheck /> </button>
                    <button onClick={()=>deleteHandle(todo.key)}> <BiX /></button>
                </div>
            </li>
        </div>
    )
}

export default Todos
