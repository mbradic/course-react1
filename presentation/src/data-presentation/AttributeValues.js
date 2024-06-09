import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CurlyBraces() {
  const code = `function App() {
        const message = "Hello, world";
        const appHeading = "App heading";
        return <h1 title={appHeading}>{message}</h1>;
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
          <div>
            <h1 style={{ margin: 0 }} title="App heading">
              Hello world
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
