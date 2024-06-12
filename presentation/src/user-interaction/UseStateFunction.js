import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateFunctionOutput from "./UseStateFunctionOutput";
import { JsxCode } from "../JsxCode";

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
      <h4>Kód:</h4>
      <p>App.jsx</p>
      {/* <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      /> */}
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/user-interaction--component-state--useState-function--App-jsx/examples/todo-list/src/App.jsx" />
      <p>
        <strong>Výstup:</strong>
      </p>
      <div style={{ border: "1px solid black" }}>
        <UseStateFunctionOutput />
      </div>
    </>
  );
}
