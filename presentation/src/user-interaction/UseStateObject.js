import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateObjectOutput from "./UseStateObjectOutput";

export default function UseStateObject() {
  const code = `import { useState } from "react";

export default function UseStateObjectOutput() {
  const [counter, setCounter] = useState({ 
    name: "Demo counter", 
    count: 0 
  });

  const handleClick = () =>
    setCounter((old) => ({ 
      ...old, 
      count: counter.count + 1 
    }));
  
  const { name, count } = counter;
  
  return (
    <>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Count: </strong>
        {count}
      </p>
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
          <UseStateObjectOutput />
        </div>
      </div>
    </>
  );
}
