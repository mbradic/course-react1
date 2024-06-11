import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import OnChangeHandlerOutput from "./OnChangeHandlerOutput";

export default function OnChangeHandler() {
  const code = `import { useState } from "react";

export default function OnChangeEventOutput() {
  const [todo, setTodo] = useState({ 
    title: "Learn react", 
    done: false 
  });
  
  const changeInput = (e) =>
    setTodo((old) => ({
      ...old,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked 
          : e.target.value,
    }));

  const { title, done } = todo;
  return (
    <>
      <input 
        name="title" 
        value={title} 
        onChange={changeInput} 
      />

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
}`;

  return (
    <>
      <p>
        <strong>Kód:</strong>
      </p>
      <p>App.js</p>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      />

      <p>
        <strong>Výstup:</strong>
      </p>
      <div style={{ border: "1px solid black" }}>
        <OnChangeHandlerOutput />
      </div>
    </>
  );
}
