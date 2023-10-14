import { useNavigate } from "react-router-dom"
import '../styles/Register.css'
import { useEffect, useState } from "react"
import useFetch from '../hooks/useFetch'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    let inputName = event.target.name
    let value = event.target.value

    if (inputName === 'name') setName(value)
    else if (inputName === 'email') setEmail(value)
    else if (inputName === 'password') setPassword(value)
  console.log('email: ' + email, 'password: ' + password, 'name: ' + name)
  }

  const {data, isPending, error} = useFetch('https://6512fb60b8c6ce52b39691d7.mockapi.io/Users')

  const [loginError, setLoginError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = data.find(x => email === x.email)
    if (user && user.password === password) {
    setLoginError(null)
    navigate('/admin')
    } else setLoginError('Incorrect Credentials')

  }
  console.log(data)


  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="colored">Register As Admin</h2>
        </div>
        <div className="input-container">
          <input placeholder="Enter email" className="input-field" type="email" name="email" onChange={handleChange} />
          <label  className="input-label">Enter email</label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Enter password" className="input-field" type="password" name="password" onChange={handleChange} />
          <label  className="input-label">Enter password</label>
          <span className="input-highlight"></span>
        </div>
        {loginError && <h4 className="error">{loginError}</h4>}

      <div className="register-btns">
        <button onClick={()=> navigate('/')} className="register-btn1">Back</button>
        <input type="submit" value={'Register'} className="register-btn2" />
      </div>
      </form>
      
    </div>
  )
}
export default Register