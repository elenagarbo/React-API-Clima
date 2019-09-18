import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import ResultadoClima from './components/ResultadoClima';

function App() {

// state principal
const [ ciudad, guardarCiudad ] = useState('');
const [ pais, guardarPais ] = useState('');
const [ error, guardarError] = useState(false); //cuando arranca la app no hay errores
const [ resultado, guardarResultado] = useState({});


useEffect(() =>{ //cuando se ejecuta y cuando haya cambios
  // prevenir ejecucion de ejecutar y solo haga cuando haya cambios
  if(ciudad==='') return;

  // consultar API
  const consultarApi = async () =>{

    const appId = 'f7f0f3b9c44a481b87d2a1b39085faac';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    let respuesta= await fetch(url);
    let resultado= await respuesta.json();
    
    guardarResultado(resultado);
   
  }

  consultarApi();
}, [ ciudad, pais ]); // arreglo de dependecias : que parte del state useEffect que tiene que estar escuchando para ejecutar consultar api

// funcion para pasar datos del formulario a este componente padre
  const datosFormulario = datos =>{
    // validar ambos campos esten
    if(datos.ciudad === '' || datos.pais === ''){// error
      guardarError(true);
      return;
    }
    // ciudad y pais existen. agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  // cargar componente condicionalmente
  let componente;

  if(error){
    // hay un error, mostrarlo
    componente = <Error mensaje='Ambos campos son obligatorios' />
  } else if(resultado.cod === "404"){
    componente = <Error mensaje='La ciudad no existe en este pais' />
  } else {
    // no hay error, mostrar clima
     componente= <ResultadoClima 
                    resultado= { resultado }
                  />;
  }


  return (
    <div>
      <Header
        titulo='React App Clima'
      />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <Formulario 
              datosFormulario={datosFormulario}
            />
          </div>
          <div className="col-12 col-md-6">
            {componente}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
