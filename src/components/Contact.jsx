import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h2 className='second-title'>Our Way Of Contact</h2>
      <h1 className='main-title'>Contact</h1>
      <div className='con-info'>
        <div className='con-cards'>
          <div className='circle'>
            <i className="pi pi-phone" style={{ fontSize: '2rem' , color: 'black'}}></i>
          </div>
          <h3><strong>Phone</strong></h3>
          <h3>005 444 333 222</h3>
        </div>
        <div className='con-cards'>
          <div className='circle'>
            <i className="pi pi-mobile" style={{ fontSize: '2rem' , color: 'black'}}></i>
          </div>
          <h3><strong>Mobile</strong></h3>
          <h3>068 901 2345</h3>
        </div>
        <div className='con-cards'>
          <div className='circle'>
            <i className="pi pi-map" style={{ fontSize: '2rem' , color: 'black'}}></i>
          </div>
          <h3><strong>Head Office</strong></h3>
          <h3>Tirana, Albania, Europe, Earth</h3>
        </div>
        <div className='con-cards'>
          <div className='circle'>
            <i className="pi pi-inbox" style={{ fontSize: '2rem' , color: 'black'}}></i>
          </div>
          <h3><strong>Email</strong></h3>
          <h3 className='u'>taxibooking@taxi.com</h3>
        </div>
      </div>
    </div>
  )
}
export default Contact