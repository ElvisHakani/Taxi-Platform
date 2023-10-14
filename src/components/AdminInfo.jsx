import '../styles/AdminInfo.css'
import useFetch from "../hooks/useFetch";

function AdminInfo() {
  const { data: Users } = useFetch(
    "https://6512fb60b8c6ce52b39691d7.mockapi.io/Users"
  );

  return (
    <div>
      {Users &&
        Users.map((user) => {
          if (user.status !== 'admin') {
            return (
              <div className="the-card" key={user.id}>
                <h3 className='admin-user-info'>Name: {user.fullName}</h3>
                <h3 className='admin-user-info'>Location: {user.location}</h3>
                <h3 className='admin-user-info'>Phone: {user.phone}</h3>
              </div>
            );
          }
        })}
    </div>
  );
}
export default AdminInfo;
