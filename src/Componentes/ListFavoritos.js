import React from 'react';
import Favoritos from './Favoritos';

function ListFavoritos(props) {
  const handleRemoveFavorito = (element) => {
    props.funremovefavorite(element);
  };

  let listarfavoritosRendered = props.visibleElements.map((element, index) => (
    <Favoritos key={index} value={element} funremovefavorite={handleRemoveFavorito} />
  ));

  return (
    <div>
      <h4>Favoritos</h4>
      {listarfavoritosRendered}
    </div>
  );
}

export default ListFavoritos;
