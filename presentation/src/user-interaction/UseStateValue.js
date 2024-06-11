import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateValueOutput from "./UseStateValueOutput";

export default function UseStateValue() {
  const code = `import { useState } from "react";

function App() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <span>{count} </span>
      <button onClick={handleClick}>++</button>
    </>
  );
}

export default App;`;

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
        <UseStateValueOutput />
      </div>
    </>
  );
}
