import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import '../styles/TaxiCard.css'

function TaxiCard() {
  const navigate = useNavigate()
  const {data: Taxi} = useFetch(
    'https://6512fb60b8c6ce52b39691d7.mockapi.io/Taxi'
);

  return (
    <div className="taxi-card">
      {Taxi &&
        Taxi.map((taxi) => {
          if (taxi.category === "VIP") {
            return (
              <div className="the-taxi" key={taxi.id}>
                <img src={taxi.photo} className='the-image'/>
                <h3 className='taxi-text'>Driver Name: {taxi.DriverName}</h3>
                <h3 className='taxi-text'>Car Type: {taxi.TaxiType}</h3>
                <h3 className='taxi-text'>Price Per Kilometer: {taxi.PricePerKilometer}$</h3>
                <h3 className='category'>{taxi.category}</h3>
                <button onClick={() => navigate('/ordered')} className='card-btn'>Order</button>
            </div>
            );
          }
        })}
    </div>
  )
}
export default TaxiCard