import React from 'react';

function ResultadoClima({resultado}) {

    console.log(resultado);

    // extraer los valores
    const { name, main} = resultado;

    if(!name) return null;

    // temperatura pasarlo a grados de kelvin
    // restar grados kelvin 
    const kelvin = 273.15;


    return(
        <div className="card">
            <div className="card-body">
                <h4>El clima de {name} es:</h4>
                <h5 className="card-title">{ parseInt(main.temp - kelvin, 10) } &deg;C</h5>

                <h6 className="card-subtitle mb-2 text-muted">Máxima: { parseInt(main.temp_max - kelvin, 10) } &deg;C </h6>
                <p className="card-text">Mínima: { parseInt(main.temp_min - kelvin, 10) } &deg;C</p>
            </div>
        </div>
    )
}

export default ResultadoClima;