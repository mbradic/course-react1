import { useState } from "react";

function App() {
  const [todo, setToDo] = useState({
    task: "Naučit se prezentovat data v Reactu",
    done: false,
  });
  const handleClick = () => setToDo((old) => ({ ...old, done: true }));
  return (
    <>
      <div style={{ textDecoration: todo.done ? "line-through" : "" }}>
        Task: {todo.task}
      </div>
      <div>Done: {todo.done ? "Yes" : "No"}</div>
      <button onClick={handleClick}>Done</button>
    </>
  );
}

export default App;
