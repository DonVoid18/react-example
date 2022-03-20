import React from "react";
import "../hojas-de-estilo/Testimonio.css";
export function Testimonio(props) {
  return (
    <div className="contentedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.${props.tipo}`)}
        alt="Imagen de Testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre} </strong>
          en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio" dangerouslySetInnerHTML={{ __html: props.testimonio }}>
        </p>
      </div>
    </div>
  );
}
