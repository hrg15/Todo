import React from 'react'
import '../style.css';
import { BiCheck } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const Todos = ({text , date , completed }) => {
    return (
        <div>
            <li className="todos">
                <div className={`text ${completed ? "completed" : ""}`}>
                <h3>{text}</h3>
                </div>
                <div className="meta">
                    <p className="todo-date">{date}</p>
                    <button> <BiCheck /> </button>
                    <button><BiX /></button>
                </div>
            </li>
        </div>
    )
}

export default Todos
