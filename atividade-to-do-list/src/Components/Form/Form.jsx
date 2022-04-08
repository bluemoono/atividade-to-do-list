import { useState } from "react";

export default function Form({ toFunction }) {
  const [valor, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Tarefa"
        onChange={(e) => setValue(e.target.value)}
      />
      {console.log(valor)}
      <button onClick={() => toFunction(valor)}>Salvar</button>
    </div>
  );
}
