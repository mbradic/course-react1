import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function StyleAttribute() {
  const code = `function App() {
const colors = ["red", "green", "blue"];
return (
        <>
            <p>RGB colors are:</p>
            <ul>
                {colors.map((color, index) => (
                <li style={{ color: color }} key={index}>
                    {color}
                </li>
                ))}
            </ul>
        </>
    );
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
      <div style={{ border: '1px solid black' }}>
        <p>RGB colors are:</p>
        <ul>
          <li style={{ color: "red" }}>red</li>
          <li style={{ color: "green" }}>green</li>
          <li style={{ color: "blue" }}>blue</li>
        </ul>
      </div>
    </>
  );
}
