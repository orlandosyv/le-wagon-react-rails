import React, { useState, useEffect } from 'react'
import Create from './Create';

const Restaurants = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    console.log("Esta es mi app de react, componente RESTAURANTES");
    initData();
  }, [])
  
  const initData = async () => {
    var url = process.env.REACT_APP_API_URL;

    var requestOptions = {
      method: 'GET'
    }

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const json = await response.json(); 
      console.log(json);
      setData(json);
      setLoading(false);
      
    }
    else {
      alert('Error fetcheando la data! HORROR!!! Contacte al soporte');
      setLoading(false);
      setError(true);
    }

    console.log(response);
  }

  const handleEdit = (item  ) => {
    console.log(  item);
  }

  return (
    <div className='text-center'>
      <h1>Restaurants Finder</h1>

      <button
        onClick = {() => setCreate (true)}>
        Add new restaurant

      </button>

      <div>
        <table className='table' >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Edit</th>
          </tr>

          { loading ? <>Loading...</> : <> 
          
            {data.map((item, i) => (        
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td 
              onClick = {() => handleEdit(item)}>
              ✏️ 
              </td>
            </tr>
            ))} 
          
          </>}          
          </table>
          <Create 
            create={create} 
            setCreate={setCreate} 
            initData = {initData}
          />


      </div>      
    </div>
  )
}

export default Restaurants