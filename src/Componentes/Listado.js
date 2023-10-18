import React, { useState } from 'react';
import Contenido from './Contenido';

function Listado(props) {
  const [posicion, setPosicion] = useState(5);
  const [verMas, setVerMas] = useState(0);
  const [mostrarVerMas, setMostrarVerMas] = useState(true);

  const handleVerMasClick = () => {
    const newElementCount = posicion + 5;
    setPosicion(newElementCount);
    setVerMas(verMas + 1);

    if (newElementCount >= props.visibleElements.length) {
      setMostrarVerMas(false);
    }
  };

  const handleVerMenosClick = () => {
    const contenidomenos = verMas * 5;
    const newElementCount = posicion - contenidomenos;
    setPosicion(newElementCount >= 5 ? newElementCount : 5);
    setMostrarVerMas(true);
  };

  const visibleElements = props.visibleElements.slice(0, posicion);

  const handleFavoritoClick = (element) => {
    props.funfavorite(element);
  };
  const List = visibleElements.map((element, index) => (
    <div className="col-md-4 mb-4" key={index}>
      <Contenido
        value={element}
        isFavorite={props.listdatosfavorites.includes(element)}
        funfavorite={handleFavoritoClick}
      />
    </div>
  ));

  return (
    <div className='container'>
      <div className='row'>
        {List}
      </div>
      <div>
        {mostrarVerMas && (
          <button className='btn btn-success' onClick={handleVerMasClick}>Ver más</button>
        )}
        {posicion > 5 && !mostrarVerMas && (
          <button className='btn btn-secondary' onClick={handleVerMenosClick}>Ver menos</button>
        )}
      </div>
    </div>
  );
}

export default Listado;
