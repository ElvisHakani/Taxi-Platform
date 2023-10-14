import { useContext } from 'react'
import '../styles/Ordered.css'
import { DateContext } from '../context/DateContext'
import { TimeContext } from '../context/TimeContext'
import { useNavigate } from 'react-router-dom'

function Ordered() {
  const navigate = useNavigate()
  const {date} = useContext(DateContext)
  const {time} = useContext(TimeContext)
  console.log('date: ' + date, 'time: ' + time)
  return (
    <div className='Ordered-div'>
      <div className='ordered-display'>
        <h1 className='Ordered-h1'>Your Taxi Is Ordered</h1>
        <div className='ordered-flex'>
          <p className='ordered-text'>It Will Arrive At:</p>
          <p className='ordered-info'>{date}, </p>
          <p className='ordered-info'>{time}.</p>
        </div>
          <h2 className='ordered-text'>Thank You</h2>
        <button onClick={() => navigate('/')} className='ordered-navigate'>Home</button>
      </div>
    </div>
  )
}
export default Ordered