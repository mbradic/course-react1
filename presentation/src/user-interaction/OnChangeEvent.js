import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import OnChangeEventOutput from "./OnChangeEventOutput";

export default function ValueAttribute() {
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
          <OnChangeEventOutput />
        </div>
      </div>
    </>
  );
}
