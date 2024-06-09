import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Events() {
  const code = `function App() {
    const handleClick = () => console.log("Kliknuto");
    return <button onClick={handleClick}>Click me</button>;
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
          <button onClick={()=>console.log("Kliknuto")}>Click me</button>
        </div>
      </div>
    </>
  );
}
