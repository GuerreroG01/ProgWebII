import React from 'react';

const Buscar = () => {
  const buscarStyle = {
    position: 'absolute',
    top: '10px', 
    right: '10px',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
  };

  return (
    <div style={buscarStyle}>
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buscar;
