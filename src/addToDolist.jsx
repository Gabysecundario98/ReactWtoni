import {useState} from "react";

export default function AgregarNota(props) {
  const [nota, setNota] = useState("");

  function handleChange(e) {
    setNota(e.target.value);
  }

  function handleSubmit(e) {
    if (nota !== "") {
      props.handleSubmit(nota);
      setNota("");
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="border-3 border-info"
        type="text"
        placeholder="Agregar nueva tarea"
        onChange={handleChange}
        value={nota}
      />
      <button type="submit" className="border-3 ms-2 border-info mb-4 mt-2">
        Agregar
      </button>
    </form>
  );
}

  