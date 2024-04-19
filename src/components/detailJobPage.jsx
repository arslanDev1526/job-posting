import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../contexts/dataContext';

const DetailJobPage = () => {

    const {id} = useParams();
    const data = useContext(DataContext);
    const item = data.find((item) => item.id === parseInt(id))

    if (!item) {
        return <div>Item not found!</div>;
      }

  return (
    <div>
    <h2>{item.positions}</h2>
    {item.detail && Array.isArray(item.detail) && (
      <div>
        {item.detail.map((info, index) => (
          <div key={index}>
            <div>{info.description}</div>
            <div>{info.howToApply}</div>
          </div>
        ))}
      </div>
    )}
    <h2>Benefits</h2>
    {item.benefits && Array.isArray(item.benefits) && (
      <ul>
        {item.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    )}
    <p>{item.description}</p>
    {/* Display other details as needed */}
  </div>
  
  )
}

export default DetailJobPage