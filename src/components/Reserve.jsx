import { useNavigate } from "react-router-dom"
import '../styles/Reserve.css'
import { useState } from "react"

function Reserve() {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
          location: '',
          fullName: '',
          phone: 0,
          status: 'user'
        })


    const handleChange = (event) => {
      const {name, value} = event.target
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name] : value
      }))
    }

    
    const addUser = (event) => {
      event.preventDefault()
      fetch('https://6512fb60b8c6ce52b39691d7.mockapi.io/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (response.ok) {
          setUserData(userData)
          navigate('/order')
        }
      })
    }
    console.log(userData)


  return (
    <div className="reserve">
      <form className="the-form" onSubmit={addUser}>
      <div className="titles">
        <h2 className="">Please Fill This Form</h2>
      </div>
      <hr />
      <div className="input-container">
          <input placeholder="Enter location" className="input-field" type="text" name="location" onChange={handleChange} required />
          <label  className="input-label">Enter location</label>
          <span className="input-highlight"></span>
      </div>
      <div className="input-container">
          <input placeholder="Enter Full Name" className="input-field" type="text" name="fullName" onChange={handleChange} required />
          <label  className="input-label">Enter Full Name</label>
          <span className="input-highlight"></span>
      </div>
      <div className="input-container">
          <input placeholder="Enter phone" className="input-field" type="text" name="phone" onChange={handleChange} required />
          <label  className="input-label">Enter phone</label>
          <span className="input-highlight"></span>
      </div>
      <div className="register-btns">
        <button className="back-btn" onClick={() => navigate('/')}>Back</button>
        <input className="order" type="submit" value={'Continue'}/>
      </div>
      </form>
    </div>
  )
}
export default Reserve