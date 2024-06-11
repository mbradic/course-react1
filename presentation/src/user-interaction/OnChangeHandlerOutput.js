import { useState } from "react";

export default function OnChangeEventOutput() {
  const [todo, setTodo] = useState({ title: "Learn react", done: false });
  
  const changeInput = (e) =>
    setTodo((old) => ({
      ...old,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const { title, done } = todo;
  return (
    <>
      <input name="title" value={title} onChange={changeInput} />
      <input
        name="done"
        type="checkbox"
        checked={done}
        onChange={changeInput}
      />
      <p>Title: {title}</p>
      <p>Done: {done ? "yes" : "no"}</p>
    </>
  );
}
