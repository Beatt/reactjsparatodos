import * as React from 'react'
import {CAPITULOS} from "./constants";
import {Link} from "react-router-dom";

function Capitulos() {
  return (
    <div className='reactjsparatodos'>
      <h1>React JS para todos - Ejemplos prácticos</h1>
      <div className='capitulos'>
        {
          CAPITULOS.map(({ descripcion, url, imagen}, index) =>
            <Link to={url} className='capitulo'>
              <h2>Capitulo {index + 3}</h2>
              <p>{descripcion}</p>
              <img src={imagen} alt="" className='capitulo__imagen' />
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default Capitulos;