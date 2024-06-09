import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import OnChangeHandlerOutput from "./OnChangeHandlerOutput";

export default function ValueAttribute() {
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
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <p>Kód:</p>
          <p>App.js</p>
          <ReactCodeMirror
            value={code}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <OnChangeHandlerOutput />
        </div>
      </div>
    </>
  );
}
