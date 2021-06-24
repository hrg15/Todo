import React , { useState , useRef , useEffect } from 'react'
import { BiPlus } from 'react-icons/bi'
import { BiCalendarEvent } from 'react-icons/bi'
import DatePicker from './DatePicker'


const Addtodo = ({ submited , handInput , setDate , date , text }) => {

    const cal = useRef()
    const [openCal, setOpenCal] = useState(false)
    const openCalendar = () =>{
        setOpenCal( !openCal )
    }

    useEffect(() => {
            document.addEventListener("mousedown" , handleClick)
        return () => {
            document.removeEventListener("mousedown" , handleClick)
        }
    }, [])

    const handleClick = (e) => {
        if (!cal.current.contains(e.target)) {
            setOpenCal(false)
        }
    }

    return (
        <div className="add-todo">

            <form onSubmit={submited}>
                <input onChange={handInput} type="text" value={text} placeholder="To Do..." />
                <button><BiPlus /></button>
            </form>

            <div ref={cal} className="calendar">
                <div className={`datepick ${openCal && "purple"}`} onClick={openCalendar}>
                     <BiCalendarEvent />
                </div>  
                {openCal && <DatePicker date={date} setDate={setDate} />}
            </div>

            {/* <div className="dates">
                <h1>{date && format(date, 'dd MMM yyyy', { locale: enGB })}</h1>
            </div> */}
        </div>
    )

}


export default Addtodo
