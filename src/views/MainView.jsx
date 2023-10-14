import { useNavigate } from "react-router-dom"
import '../styles/MainView.css'

function MainView() {
  const navigate = useNavigate()
  return (
  <div className="the">
    <div className="main-page">
      <div>
        <h1 className="title">More Than You Wish</h1>
        <p className="p">We operate one of the largest fleets of taxis in Tirana ensuring that you are never waiting long for your cab. 
          Our office is manned 24/7 and using the latest computer programs and satellite positioning we are able to dispatch taxis 
          quickly and efficiently, ensuring that waiting times are kept to an absolute minimum.</p>
      </div>
      <div className="picture"></div>
    </div>
      <button className="book-btn" onClick={()=> navigate('/reserve')}>Book A Ride</button>
      <footer>
        <div className="mrg-left">
          <h2 className="yellow"><strong>About us</strong></h2>
        <p className="t">We created our taxi to help you find the most dependable and highest quality taxi services, 
          anytime and anywhere without any problems.
          mob: <strong>068 901 2345</strong></p>
        </div>
        <div>
          <h2 className="yellow"><strong>Contact Us</strong></h2>
          <div className="flex">
            <i className="pi pi-phone" style={{ fontSize: '1rem' , color: 'rgb(255, 232, 30)'}}></i>
            <h4>005 444 333 222</h4>
          </div>
          <div className="flex">
            <i className="pi pi-mobile" style={{ fontSize: '1rem' , color: 'rgb(255, 232, 30)'}}></i>
            <h4>068 901 2345</h4>
          </div>
          <div className="flex">
            <i className="pi pi-map" style={{ fontSize: '1rem' , color: 'rgb(255, 232, 30)'}}></i>
            <h4>Tirana, Albania, Europe, Earth</h4>
          </div>
          <div className="flex">
            <i className="pi pi-inbox" style={{ fontSize: '1rem' , color: 'rgb(255, 232, 30)'}}></i>
            <h4 className="underline">taxibooking@taxi.com</h4>
          </div>
        </div>
        <div className="mrg-right">
          <h2 className="yellow"><strong>Menu</strong></h2>
          <div className="foot-btn">
            <button onClick={()=> document.documentElement.scrollTop = 0} className="footer-btn">Home</button>
            <button onClick={()=> navigate('/about')} className="footer-btn">About US</button>
            <button onClick={()=> navigate('/contact')} className="footer-btn">Contact</button>
            <button onClick={()=> navigate('/register')} className="footer-btn">Register As Admin</button>
          </div>
        </div>
      </footer>
  </div>
  )
}
export default MainView