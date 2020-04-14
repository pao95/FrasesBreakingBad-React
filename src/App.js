import React, { useState, useEffect } from 'react';
import Frase from './components/Frase';


function App() {

  const [frase, guardarFrase] = useState({})

  const consultarApi = async() =>{

  
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0])
    }

useEffect(() => {
 consultarApi()
}, [])
  
  return (

        <div className="container">
          <h1>Breaking Bad</h1>


          <Frase frase={frase}/>
                   
          <button type="button" onClick={consultarApi}
          className="btn btn-color btn-lg btn-block">Obtener Frase</button>

        </div>
        
  );
}

export default App;
