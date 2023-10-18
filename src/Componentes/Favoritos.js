import React from 'react';

function Favoritos(props) {
    const handleRemoveFavoritoClick = () => {
        props.funremovefavorite(props.value);
      };
    
  return (
    <div className="alert alert-success p-0" role="alert" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <img width="50px" src={props.value.Foto} alt="Foto" />
            <small>{props.value.Nombre}</small>
        </div>
        <button className='btn btn-outline-dark' style={{ border: 'none', background: 'none' }} onClick={handleRemoveFavoritoClick}>X</button>
    </div>

  );
}

export default Favoritos;
