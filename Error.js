import React from 'react';

function Error({mensaje}) {
    return(
        <div className="alert alert-danger" role="alert">
           {mensaje}
        </div>
    )
}

export default Error;