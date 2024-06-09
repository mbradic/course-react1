import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateFunctionOutput from "./UseStateFunctionOutput";

export default function Events() {
  const code = `import { useState } from "react";

export default function UseStateFunctionOutput() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(old => old+1);
  return (
    <>
      <span>{count} </span>
      <button onClick={handleClick}>++</button>
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
          <UseStateFunctionOutput />
        </div>
      </div>
    </>
  );
}
