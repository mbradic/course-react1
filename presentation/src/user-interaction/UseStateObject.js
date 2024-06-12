import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateObjectOutput from "./UseStateObjectOutput";
import { JsxCode } from "../JsxCode";

export default function UseStateObject() {
  //   const code = `import { useState } from "react";

  // export default function UseStateObjectOutput() {
  //   const [counter, setCounter] = useState({
  //     name: "Demo counter",
  //     count: 0
  //   });

  //   const handleClick = () =>
  //     setCounter((old) => ({
  //       ...old,
  //       count: counter.count + 1
  //     }));

  //   const { name, count } = counter;

  //   return (
  //     <>
  //       <p>
  //         <strong>Name: </strong>
  //         {name}
  //       </p>
  //       <p>
  //         <strong>Count: </strong>
  //         {count}
  //       </p>
  //       <button onClick={handleClick}>++</button>
  //     </>
  //   );
  // }`;

  return (
    <>
      <h4>Kód:</h4>
      <p>App.jsx</p>
      {/* <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      /> */}
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/user-interaction--component-state--object-as-state--App-jsx/examples/todo-list/src/App.jsx" />

      <h4>Výstup:</h4>
      <div style={{ border: "1px solid black" }}>
        <UseStateObjectOutput />
      </div>
    </>
  );
}
