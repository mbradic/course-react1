import { useState } from "react";

function App() {
  const [todos, setToDos] = useState([
    {
      id: 1,
      task: "Naučit se prezentovat data v Reactu",
      done: true,
    },
    {
      id: 2,
      task: "Naučit se reagovat na události",
      done: true,
    },
    {
      id: 3,
      task: "Naučit se inputy a formuláře v Reactu",
      done: false,
    },
    {
      id: 4,
      task: "Naučit se komunikovat s back-endem",
      done: false,
    },
  ]);
  const handleDone = (id) =>
    setToDos((old) => old.map((o) => (o.id !== id ? o : { ...o, done: true })));
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Done</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.task}</td>
              <td>{t.done ? "Yes" : "No"}</td>
              <td>
                {!t.done && (
                  <button onClick={() => handleDone(t.id)}>Done</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
