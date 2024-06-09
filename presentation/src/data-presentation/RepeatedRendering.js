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
          <p>RGB colors are:</p>
          <ul>
            <li>red</li>
            <li>green</li>
            <li>blue</li>
          </ul>
        </div>
      </div>
    </>
  );
}
