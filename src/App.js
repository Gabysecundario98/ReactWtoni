import React, {useState} from "react";
import ListaTareas from "./toDolist";
import AgregarNota from "./addToDolist";

export default function ToDoList() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(todo) {
    setTareas([...tareas, todo]);
  }

  return (
    <div className="App">
      <h1>To do List </h1>
      <AgregarNota handleSubmit={agregarTarea} />
      <ListaTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
}

