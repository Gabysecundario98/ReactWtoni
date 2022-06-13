import React from "react";

export default function ListaTareas(props) {
    let lista = props.tareas.map((val, index) => <li key={index}>{val} <button onClick={() => borrar(index)}>borrar</button> </li>);

    function borrar(index) {
      const newLista = [...props.tareas]
      newLista.splice(index, 1)
      props.setTareas(newLista)
    }

    return <ul>{lista}</ul>;
  }
  