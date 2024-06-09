import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function LogicalAnd() {
  const basic_interpolation = `function App() {
  const showMessage = false;
  return (
    <>
      <h1>Hidden message</h1>
      {showMessage && <p>Secret message</p>}
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
            value={basic_interpolation}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <h1>Hidden message</h1>
        </div>
      </div>
    </>
  );
}
