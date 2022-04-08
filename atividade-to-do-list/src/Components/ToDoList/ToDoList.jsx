//import { useState } from "react";

export default function ToDoList({ toDo, toFunction }) {
  return (
    <div>
      <ul>
        {toDo.map((e, i) => (
          <li key={i}>
            <h1>{e}</h1>
            <button onClick={() => toFunction(e)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
