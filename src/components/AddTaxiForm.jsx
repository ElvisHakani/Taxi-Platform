import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddTaxiForm() {

  const navigate = useNavigate()

  const [taxiData, setTaxiData] = useState({
    DriverName: '',
    TaxiType: '',
    PricePerKilometer: 0,
    category: '',
    photo: ''
  })
  console.log(taxiData)

  const handleChange = (event) => {
    const {name,value} = event.target
    setTaxiData((prevTaxiData) => ({
      ...prevTaxiData,
      [name] : value
    }))
  }

  const addTaxi = (event) => {
    event.preventDefault()
    fetch('https://6512fb60b8c6ce52b39691d7.mockapi.io/Taxi', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(taxiData)
    })
    .then(response => {
      if (response.ok) {
        setTaxiData(taxiData)
        alert('Taxi Added')
        navigate('/admin/taxis')
      }
    })
  }

  
  return (
    <div>
        <form onSubmit={addTaxi}>
        <h2>Add Taxi</h2>
        <div className="input-container">
          <input placeholder="Driver Name" className="input-field" type="text" name="DriverName" onChange={handleChange} required />
          <label className="input-label">Driver Name</label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Taxi Type" className="input-field" type="text" name="TaxiType" onChange={handleChange} required />
          <label className="input-label">Taxi Type</label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Taxi Photo" className="input-field" type="text" name="photo" onChange={handleChange} required />
          <label className="input-label">Taxi Photo</label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Price per Kilometer" className="input-field" type="text" name="PricePerKilometer" onChange={handleChange} required />
          <label className="input-label">Price per Kilometer</label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Category" className="input-field" type="text" name="category" onChange={handleChange} required />
          <label className="input-label">Category</label>
          <span className="input-highlight"></span>
        </div>
      <input className="order" type="submit" value={'Add'}/>
        </form>
    </div>
  )
}
export default AddTaxiForm