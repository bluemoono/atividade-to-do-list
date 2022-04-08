import "./App.css";

import { useState } from "react";

import Form from "./Components/Form/Form.jsx";
import ToDoList from "./Components/ToDoList/ToDoList.jsx";

function App() {
  const [toDo, setToDo] = useState(["a"]);

  console.log(toDo);

  function addToDo(newToDo) {
    return setToDo([...toDo, newToDo]);
  }

  function handleToDo(removeToDo) {
    let filtro = toDo.filter((e) => e !== removeToDo);

    return setToDo(filtro);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form toFunction={addToDo} />
        <ToDoList toFunction={handleToDo} toDo={toDo} />
      </header>
    </div>
  );
}

export default App;
