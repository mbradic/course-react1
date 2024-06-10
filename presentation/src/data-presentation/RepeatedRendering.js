import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function RepeatedRendering() {
  const basic_interpolation = `function App() {
    const colors = ["red", "green", "blue"];
    return (
        <>
            <p>RGB colors are:</p>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
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
        value={basic_interpolation}
        readOnly
        extensions={[javascript({ jsx: true })]}
      />

      <p>
        <strong>Výstup:</strong>
      </p>
      <div style={{ border: "1px solid black" }}>
        <p>RGB colors are:</p>
        <ul>
          <li>red</li>
          <li>green</li>
          <li>blue</li>
        </ul>
      </div>
    </>
  );
}
