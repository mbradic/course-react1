import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateValueOutput from "./UseStateValueOutput";
import ValueAttributeOutput from "./ValueAttributeOutput";

export default function ValueAttribute() {
  const code = `export default function ValueAttributeOutput() {
    const title = "Learn react";
    const done = false;
    return (
        <>
        <input value={title} />
        <input type="checkbox" checked={done} />
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
            value={code}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <ValueAttributeOutput />
        </div>
      </div>
    </>
  );
}
