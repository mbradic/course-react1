import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import OnChangeEventOutput from "./OnChangeEventOutput";

export default function OnChangeEvent() {
  const code = `import { useState } from "react";

export default function OnChangeEventOutput() {
  const [title, setTitle] = useState("Learn react");
  const [done, setDone] = useState(false);

  const changeTitle = (e) => setTitle(e.target.value);
  const changeDone = (e) => setDone(e.target.checked);
  
  return (
    <>
      <input value={title} onChange={changeTitle} />
  
      <input
        type="checkbox"
        checked={done}
        onChange={changeDone}
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
        <OnChangeEventOutput />
      </div>
    </>
  );
}
