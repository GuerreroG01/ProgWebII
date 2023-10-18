import React from 'react';
import logo from '../Images/Banco.png';


function Menu() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src={logo} alt="Logo" width="40" height="32" className="rounded"/>
        <span className="fs-3">Banco React</span>
      </a>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Clientes
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Cuentas
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            Tarjetas
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            Personal
          </a>
        </li>
      </ul>
      <hr />
      </div>
  );
}

export default Menu;
