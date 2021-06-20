import React , { useState } from 'react'
import './style.css';
import Addtodo from './Component/Addtodo';
import Todos from './Component/Todos'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

// const data =[
//   {todo:"workout to day" , date:"2021/7/16" , completed:false , key:"1"},
//   {todo:"learn react to day" , date:"2021/7/16" , completed:false, key:"2" },
//   {todo:"Read a book to day" , date:"2021/7/16" , completed:true , key:"3"}
// ];

const App =() => {

  //const [completed , setcompleted] = useState(false)
  const [date, setDate] = useState()
  const [text , setText] = useState('')
  const [todos , setTodos] = useState([])

  const handInput = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const time = date && format(date, 'dd MMM yyyy', { locale: enGB })
    if (text === '' || time === undefined){alert("Please enter value!"); return}
    setTodos([...todos , {todo:text , date:time , completed:false , key:Math.random()*10-1 }])
    setDate()
    setText('')
 }

  return(
    <div className="App">

      <Addtodo
       submited={handleSubmit}
       handInput={handInput}
       setDate={setDate}
       date={date}
       text={text}
       />

      <ul className="todo-list">

      {todos.map((todo)=>{
        return <Todos key={todo.key} text={todo.todo} date={todo.date}  />
      })}

      </ul>
    </div>
  )
}

export default App;