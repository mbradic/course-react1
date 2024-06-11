import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Events() {
  const code = `function App() {
    const handleClick = () => console.log("Kliknuto");
    return <button onClick={handleClick}>Click me</button>;
}`;

  return (
    <>
      <p>
        <strong>Kód:</strong>
      </p>
      <p>App.jsx</p>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={[javascript({ jsx: true })]}
      />

      <p>
        <strong>Výstup:</strong>
      </p>
      <div style={{ border: "1px solid black" }}>
        <button onClick={() => console.log("Kliknuto")}>Click me</button>
      </div>
    </>
  );
}
