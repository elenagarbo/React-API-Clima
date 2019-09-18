import React from 'react';

// HOOKS

function Header({titulo}){
    return(
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="!#">
                <img src={process.env.PUBLIC_URL + '/clima.png'} width="30" height="30" className="d-inline-block align-top" alt=""/>
                {titulo}
           </a>
        </nav>
    )
}

export default Header;

// SFC

// const Header = ({titulo}) => (
//         <nav className="navbar navbar-dark bg-primary">
//             <a className="navbar-brand" href="#">
//                 <img src={process.env.PUBLIC_URL + '/clima.png'} width="30" height="30" class="d-inline-block align-top" alt=""/>
//                 {titulo}
//             </a>
//         </nav>
//     );

// export default Header;