import React , { useState , useEffect } from 'react'
import './style.css';
import Addtodo from './Component/Addtodo'
import Todos from './Component/Todos'
import Sidebar from './Component/Sidebar'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'


const App =() => {

  const [date, setDate] = useState()
  const [text , setText] = useState('')
  const [todos , setTodos] = useState([])
  const [err , setErr] = useState('')

  useEffect(() => {
    getLocalstorage()
  },[])
  
  
  useEffect(() => {
   saveLs(todos)
  }, [todos])
  
  const handInput = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let time = date && format(date, 'dd MMM yyyy', { locale: enGB })
    const id = Math.random() * 2
    if (text === ''){setErr("Please enter a task"); return}
    if ( time === undefined){time = "today"}
    setTodos([...todos , {todo:text , date:time , completed:false , key:id }])
    setDate()
    setText('')
    setErr('')
 }

 const saveLs =(todos) =>{
     localStorage.setItem('todos' , JSON.stringify(todos))
 }
 const getLocalstorage =() =>{
   if (localStorage.getItem('todos') === null ) {
     localStorage.setItem('todos' , JSON.stringify([]))
    }else{
     let todoLs = JSON.parse(localStorage.getItem('todos' , JSON.stringify(todos)))
     setTodos(todoLs)
   }
 }

 const deleteTodo = (id) =>{
  setTodos(todos.filter((todo) => todo.key !== id ))
 }

 const completedHandle = (id) =>{
  setTodos(todos.map((todo)=>{
    if (todo.key === id) {
      return{
        ...todo , completed: !todo.completed
      }
    }
    return todo;
  }))
}

  return(
    <div className="App">
      <main>
      <Addtodo
       submited={handleSubmit}
       handInput={handInput}
       setDate={setDate}
       date={date}
       text={text}
       />

    <p className="error">{err}</p> 

      <ul className="todo-list">
      {todos.map((todo)=>{
        return <Todos
        key={todo.key}
        text={todo.todo} 
        date={todo.date} 
        todo={todo}
        setCompleted={completedHandle}
        deleteHandle={deleteTodo}
       />

      })}
      </ul>
      </main>
      <aside>

          <Sidebar 
          todos={todos}
          setCompleted={completedHandle}
          deleteHandle={deleteTodo}
          />

      </aside>
    </div>
  )
}

export default App;