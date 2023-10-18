import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Contenido(props) {
  const handleFavoritoClick = () => {
    props.funfavorite(props.value);
  };
  return (
    <div className="card mb-3">
      <img src={props.value.Foto} className="card-img-top" alt="foto" width="100" height="250" />
      <div className="card-body">
        <h5 className="card-title">{props.value.Nombre}</h5>
        <p className="card-text">Número de Cuenta: {props.value.No_Cuenta}</p>
        {!props.isFavorite && (
          <button className='btn btn-outline-danger' onClick={handleFavoritoClick}>
          <FontAwesomeIcon icon={faHeart} />
        </button>        
        )}
      </div>
    </div>
  );
}

export default Contenido;
