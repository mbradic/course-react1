import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function AttributeValues() {
  const code = `function App() {
        const message = "Hello, world";
        const appHeading = "App heading";
        return <h1 title={appHeading}>{message}</h1>;
      }`;
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
        <h1 style={{ margin: 0 }} title="App heading">
          Hello world
        </h1>
      </div>
    </>
  );
}
