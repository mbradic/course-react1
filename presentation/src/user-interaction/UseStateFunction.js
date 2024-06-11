import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateFunctionOutput from "./UseStateFunctionOutput";

export default function UseStateFunction() {
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
      <div style={{ margin: "0 0 0 50px", width: "50%" }}>
        <UseStateFunctionOutput />
      </div>
    </>
  );
}
