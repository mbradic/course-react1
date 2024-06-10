import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CurlyBraces() {
  const basic_interpolation = `function App() {
    const message = "Hello, world";
    return <h1>{message}</h1>;
}`;
  return (
    <>
     <p> <strong>Kód:</strong></p>
      <p>App.js</p>
      <ReactCodeMirror
        value={basic_interpolation}
        readOnly
        extensions={[javascript({ jsx: true })]}
      />

      <p><strong>Výstup:</strong></p>
      <div style={{border: "1px solid black"}}>
        <h1 style={{ margin: 0 }}>Hello world</h1>
      </div>
    </>
  );
}
