import React, { useState } from 'react'
import axios from 'axios'


const Tarjeta = () => {
  const apiInfo = axios.get('https://randomuser.me/api/');
  // console.log(apiInfo);
  apiInfo.then(response => console.log(response.data.results[0].name))
  
  const datos = useState([])

  return (
    {datos.map((item) => (
      <div className="card">
        <img src="..." className="card-img-top" alt="people's face"></img>
        <div className="card-body">
          <h5 className="card-title">Card title `${item.data.results[0].name.first}`  </h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
        </div>
      </div>
    ))}
  )
}

export default Tarjeta