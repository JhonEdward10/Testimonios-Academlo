import React from "react";
import "../stylesheets/Testimonio.css";

const Testimonio = (props) => {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={props.imagen}
      alt='Fotografia de Gabriel'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className='cargo-del-testimonio'><strong>{props.cargo}</strong></p>
        <p className='texto-testimonio'>
          {props.testimonio}
        </p>
      </div>    
    </div>
  );
}

export default Testimonio;