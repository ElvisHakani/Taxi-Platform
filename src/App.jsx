import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import 'primeicons/primeicons.css';

function App() {
  const navigate = useNavigate()
  return (
    <div className='App'>
      <div className='nav-bar'>
        <div className='logo'>
          <h1 className='taxi'><strong>Taxi</strong></h1>
          <h1 className='booking'><em>Booking</em></h1>
        </div>
        <div className='number'>
          <i className="pi pi-phone" style={{ fontSize: '2rem' , color: 'rgb(255, 232, 30)'}}></i>
          <h2 className='padd'><strong>005 444 333 222</strong></h2>
        </div>
        <div className='nav-btns'>
          <button className='home-btn' onClick={() => navigate('/')}><strong>Home</strong></button>
          <button className='reserve-btn' onClick={() => navigate('/reserve')}><strong>Book A Ride</strong></button>
          <button className='contact-btn' onClick={()=> navigate('/contact')}><strong>Contact</strong></button>
        </div>
      </div>
    <Outlet />
    </div>
  )
}

export default App
