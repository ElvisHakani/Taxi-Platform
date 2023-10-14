import { useContext } from 'react'
import '../styles/Order.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { DateContext } from '../context/DateContext'
import { TimeContext } from '../context/TimeContext'

function Order() {
  const navigate = useNavigate()

  const {date, setDate} = useContext(DateContext)
  const {time, setTime} = useContext(TimeContext)

  const handleChange = (event) => {
    let inputName = event.target.name
    let value = event.target.value
    if (inputName === 'time') setTime(value)
    if (inputName === 'date') setDate(value)
  }

  const handleButtonVip = () => {
    if (date, time === null) {
      alert('Please select a date and time')
      button.disabled
  }else {
    navigate('VIP')
  }
}
  const handleButtonLuxury = () => {
    if (date, time === null) {
      alert('Please select a date and time')
      button.disabled
  }else {
    navigate('luxury')
  }
}
  const handleButtonCommon = () => {
    if (date, time === null) {
      alert('Please select a date and time')
      button.disabled
  }else {
    navigate('common')
  }
}
  const handleButtonEconomic = () => {
    if (date, time === null) {
      alert('Please select a date and time')
      button.disabled
  }else {
    navigate('economic')
  }
}


console.log('time: ' + time, 'date: ' + date)
  return (
    <div className='Order'>
      <div className='side-bar'>
        <div className='display'>
          <h2>Pickup date & time</h2>
          <input type='date' name='date' onChange={handleChange} className='side-input'/>
          <input type="time" name='time' onChange={handleChange} className='side-input'/>
        </div>
        <div className='cati display'>
          <h2>Category</h2>
          <button className='side-btn' onClick={handleButtonVip}>Vip</button>
          <button className='side-btn' onClick={handleButtonLuxury}>Luxury</button>
          <button className='side-btn' onClick={handleButtonCommon}>Common</button>
          <button className='side-btn' onClick={handleButtonEconomic}>Economic</button>
        </div>
      </div>
      <div className='grid'>
        <Outlet />
      </div>
    </div>
  )
}
export default Order