import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateValueOutput from "./UseStateValueOutput";
import { JsxCode } from "../JsxCode";

export default function UseStateValue() {
  //   const code = `import { useState } from "react";

  // function App() {
  //   const initialCount = 0;
  //   const [count, setCount] = useState(initialCount);
  //   const handleClick = () => setCount(count + 1);
  //   return (
  //     <>
  //       <span>{count} </span>
  //       <button onClick={handleClick}>++</button>
  //     </>
  //   );
  // }

  // export default App;`;

  return (
    <>
      <h4>Kód:</h4>
      <p>App.jsx</p>
      {/* <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      /> */}
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/user-interaction--component-state--use-state-value-app-jsx/examples/todo-list/src/App.jsx" />

      <h4>Výstup:</h4>
      <div style={{ border: "1px solid black" }}>
        <UseStateValueOutput />
      </div>
    </>
  );
}
