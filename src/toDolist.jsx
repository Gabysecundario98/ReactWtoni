import React from "react";

export default function ListaTareas(props) {
    let lista = props.tareas.map((val, index) => <li className="text-primary fs-4 text-decoration-underline" key={index}>{val} <button className="border-3 fs-6 ms-2 border-primary py-1 mb-4 mt-2 px-3" onClick={() => borrar(index)}>x</button> </li>);

    function borrar(index) {
      const newLista = [...props.tareas]
      newLista.splice(index, 1)
      props.setTareas(newLista)
    }

    return <ul className="text-decoration-none">{lista}</ul>;
  }
  