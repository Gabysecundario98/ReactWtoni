import React, {useState} from "react";
import ListaTareas from "./toDolist";
import AgregarNota from "./addToDolist";

export default function ToDoList() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(todo) {
    setTareas([...tareas, todo]);
  }

  return (
  <div className="d-flex text-center justify-content-center m-4">
    <div className="App w-25 mt-4 p-3 bg-warning">
      <h1 className="text-primary fs-1">To do List </h1>
      <AgregarNota handleSubmit={agregarTarea} />
      <ListaTareas tareas={tareas} setTareas={setTareas} />
    </div>
  </div>
  );
}

