// import ReactCodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { JsxCode } from "../JsxCode";

export default function Events() {
  //   const code = `function App() {
  //     const handleClick = () => console.log("Kliknuto");
  //     return <button onClick={handleClick}>Click me</button>;
  // }`;

  return (
    <>
      <h3>Události</h3>
      <h4>Kód:</h4>
      {/* <p>App.jsx</p>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      /> */}
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/user-interaction--events--app-jsx--initial/examples/todo-list/src/App.jsx" />

      <h4>Výstup:</h4>
      <div style={{ border: "1px solid black" }}>
        <button onClick={() => console.log("Kliknuto")}>Click me</button>
      </div>
    </>
  );
}
