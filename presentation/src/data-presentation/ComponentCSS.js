import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";

export default function StyleAttribute() {
  const cssCode = `.red {
  color: red;
}

.green {
  color: green;
}

.blue {
  color: blue;
}`;
  const code = `import "./App.css";

function App() {
  const colors = ["red", "green", "blue"];
  return (
          <>
              <p>RGB colors are:</p>
              <ul>
                  {colors.map((color, index) => (
                  <li className={color} key={index}>
                      {color}
                  </li>
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
          <p>App.css</p>
          <ReactCodeMirror value={cssCode} readOnly extensions={[css()]} />
          <p>App.js</p>
          <ReactCodeMirror
            value={code}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <p>RGB colors are:</p>
          <ul>
            <li style={{ color: "red" }}>red</li>
            <li style={{ color: "green" }}>green</li>
            <li style={{ color: "blue" }}>blue</li>
          </ul>
        </div>
      </div>
    </>
  );
}
