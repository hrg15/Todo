import React , { useState , useEffect } from 'react'
import Todos from './Todos'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

let isAll = true
let isCompleted = false
let isUncompleted = false
const Sidebar = ({ todos , setCompleted , deleteHandle }) => {
    const [openSidebar , setOpenSidebar] = useState(false)
    const [filterChecked , setfilterChecked ] = useState('All')
    const [filteredTodos, setfilteredTodos] = useState(todos)

    const handleToggle = () => {
        setOpenSidebar( !openSidebar )
    }

    const filterCheck = (e) =>{
        setfilterChecked(e.target.innerText)
    }
    const filteredTodo = () => {
        switch (filterChecked) {
            case "Completed":
                setfilteredTodos(todos.filter((todo) => todo.completed === true))
                isAll = false
                isUncompleted = false
                isCompleted = true
                break;
            case "Uncompleted":
                setfilteredTodos(todos.filter((todo) => todo.completed === false))
                isAll = false
                isUncompleted = true
                isCompleted = false
                break;
            case "All":
                setfilteredTodos(todos)
                isAll = true
                isUncompleted = false
                isCompleted = false
                break;
            default:
                setfilteredTodos(todos)
                break;
        }
    }
    useEffect(() => {
        filteredTodo()
    }, [todos , filterChecked ])

    return (
        <div className={`sidebar ${openSidebar && "display-sidebar"}`}>
            <h1>Todos</h1>
            <div className="filter-todos">
                <ul onClick={filterCheck}>
                    <li className={`${isAll && "active"}`}>All</li>
                    <li className={`${isCompleted && "active"}`}>Completed</li>
                    <li className={`${isUncompleted && "active"}`}>Uncompleted</li>
                </ul>
            </div>
            <div className="sidebar-list">
            <ul>
                {filteredTodos.map((todo)=>{
                    return <Todos
                    key={todo.key}
                    text={todo.todo} 
                    date={todo.date} 
                    todo={todo}
                    deleteHandle={deleteHandle}
                    setCompleted={setCompleted}
                />

                })}
            </ul>
            </div>
            <button onClick={handleToggle} className="toggle-sidebar">{openSidebar ? <BiChevronLeft/> : <BiChevronRight /> }</button>
        </div>
    )
}

export default Sidebar
