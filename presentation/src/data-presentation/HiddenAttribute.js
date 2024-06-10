import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function HiddenAttribute() {
  const basic_interpolation = `function App() {
    const showMessage = false;
    return <>
        <h1>Hidden message</h1>
        <p hidden={!showMessage}>Secret message</p>
    </> 
}`;
  return (
    <>
      <p>
        <strong>Kód:</strong>
      </p>
      <p>App.jsx</p>
      <ReactCodeMirror
        value={basic_interpolation}
        readOnly
        extensions={[javascript({ jsx: true })]}
      />

      <p>
        <strong>Výstup:</strong>
      </p>
      <div style={{ border: "1px solid black" }}>
        <h1>Hidden message</h1>
        <p hidden>Secret message</p>
      </div>
    </>
  );
}
