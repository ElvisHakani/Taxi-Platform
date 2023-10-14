import '../styles/AdminTaxi.css'
import useFetch from "../hooks/useFetch"
import { useNavigate } from 'react-router-dom';

function AdminTaxi() {
    const navigate = useNavigate()

    const {data: Taxi} = useFetch(
        'https://6512fb60b8c6ce52b39691d7.mockapi.io/Taxi'
    );

  return (
    <div>
        {Taxi &&
        Taxi.map((taxi) => 
            <div className="the-taxi" key={taxi.id}>
                <img src={taxi.photo} className='the-image'/>
                <h3 className='taxi-text'>Driver Name: {taxi.DriverName}</h3>
                <h3 className='taxi-text'>Car Type: {taxi.TaxiType}</h3>
                <h3 className='taxi-text'>Price Per Kilometer: {taxi.PricePerKilometer}$</h3>
                <h3 className='category'>{taxi.category}</h3>
            </div>
        )}
        <button className='add-taxi' onClick={() => navigate('/admin/addtaxi')}><strong>Add New Taxi</strong></button>
    </div>
  )
}
export default AdminTaxi