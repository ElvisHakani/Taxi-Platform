import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/AdminView.css'

function AdminView() {
  const navigate = useNavigate()

  return (
    <div className="Admin">
      <div className="admin-side">
        <h2>Admin</h2>
        <button className='admin-btn' onClick={() => navigate('info')}>Show All Users</button>
        <button className='admin-btn' onClick={() => navigate('taxis')}>Show Available Taxis</button>
        <button className='admin-btn' onClick={() => navigate('search')}>Search Users</button>
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}
export default AdminView