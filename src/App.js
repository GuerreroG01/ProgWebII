import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Componentes/Menu';
import Buscar from './Componentes/Buscar';
import Listado from './Componentes/Listado';
import Datos from './Data/Datos';
import Favoritos from './Componentes/Favoritos';
import ListFavoritos from './Componentes/ListFavoritos';

function App() {
  const [listar, setListar] = useState(Datos);
  const [listdatosfavorites, setListdatosfavorites] = useState([]);

  const agregarfavorito = (element) => {
    setListdatosfavorites([...listdatosfavorites, element]);
  };

  const eliminarfavorito = (element) => {
    const newFavorites = listdatosfavorites.filter((item) => item !== element);
    setListdatosfavorites(newFavorites);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 menu">
          <Menu />
        </div>
        <div className="col-md-6 content">
          <Buscar /><br /><br /><br />
          <Listado
            visibleElements={listar}
            listdatosfavorites={listdatosfavorites}
            funfavorite={agregarfavorito}
          />
        </div>
        <div className="col-md-3 favorites">
          <br /><br /><br /><br />
          <ListFavoritos
            visibleElements={listdatosfavorites}
            funremovefavorite={eliminarfavorito}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
