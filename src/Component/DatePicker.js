import React from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

 function DatePicker({date , setDate}) {
  return (
    <div className="date-picker">
      <p>The selected date is : {date && format(date, 'dd MMM yyyy', { locale: enGB })}</p>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}
export default DatePicker