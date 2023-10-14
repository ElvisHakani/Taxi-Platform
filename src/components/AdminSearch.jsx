import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function AdminSearch() {
    const navigate = useNavigate()

    const [city, setCity] = useState('')

    const handleChange = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        if (inputName === 'city') setCity(value)
    }


    const {data: Users} = useFetch("https://6512fb60b8c6ce52b39691d7.mockapi.io/Users")

  return (
    <div className="flex-admin">
        <input placeholder="Searth Users Location..." type="text" name="city" className="input" onChange={handleChange}/>
        {Users &&
        Users.map((users) => {
            if (users.location === city) {
                return (
                <div className="the-card" key={users.id}>
                    <h3 className="admin-user-info">Name: {users.fullName}</h3>
                    <h3 className="admin-user-info">Location: {users.location}</h3>
                    <h3 className="admin-user-info">Phone: {users.phone}</h3>
                </div>
                )
            }
        })}
        <button onClick={() => navigate('/admin')} className="search-back"><i className="pi pi-arrow-left" style={{ fontSize: '1rem' }}></i>Back</button>
    </div>
  )
}
export default AdminSearch