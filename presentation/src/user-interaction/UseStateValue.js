import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateValueOutput from "./UseStateValueOutput";

export default function Events() {
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
          <UseStateValueOutput />
        </div>
      </div>
    </>
  );
}
