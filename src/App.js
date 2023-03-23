import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countris></Countris>
    </div>
  );
}

function Countris(){
  const [country, setCountris] = useState([]);

  useEffect( ()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountris(data))

  },[])

  return(
    <div>
      <h1>Visiting Every country of the world!!!</h1>
      <h3>Available Countris: {country.length}</h3>
      {
        country.map(country => <Country name={country.name.common}
         population={country.population} region= {country.region} maps={country.maps.googleMaps} ></Country> )
      }
    </div>
  )
}

 function Country(props){
  return(
    <div>
      <h1>name: {props.name}</h1>
      <p>population:{props.population}</p>
      <h6>region:{props.region}</h6>
    </div>
  )
 }

export default App;

// http://192.168.0.108:3000