import React, {useState} from 'react';

function Formulario({datosFormulario}){

    // state del Componente
    // busqueda: state actual; guardarBusqueda: cambiar el state
    const [busqueda, guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    });

    // cambiar el state
    const handleChange = e =>{
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        });
    }

    // pasar hacia componente app la busqueda dle usuario
    const consultarClima = e =>{
        e.preventDefault();
        datosFormulario(busqueda);
    }

    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="form-group">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text"
                    name="ciudad"
                    className="form-control" 
                    id="ciudad" 
                    onChange={handleChange}
                    aria-describedby="emailHelp" 
                    placeholder="Selecciona ciudad" />
            </div>

            <div className="form-group">
                <label htmlFor="pais">Pais</label>
                <select name="pais" className="form-control" onChange={handleChange}>
                    <option value="">-- Selecciona un páis --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>

            <input type="submit" className="btn btn-primary" value="Buscar clima"/>
        </form>
    );
}
   


export default Formulario;