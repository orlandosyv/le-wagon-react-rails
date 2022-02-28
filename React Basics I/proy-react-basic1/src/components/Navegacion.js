import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Navegacion = () => {
  return (
    <nav>
      <Navbar className="p-4">
        <p>1234</p> 
        <h5 className='px-5'>HEADER</h5>
        <input 
          type="text" 
          id="name" 
          name="name"
          minLength="4" 
          placeholder='buscar'>
        </input>
        <Button variant="danger" className='m-3 p-2'>Click Me!</Button>
      
      </Navbar>
      

    </nav>
  )
}

export default Navegacion