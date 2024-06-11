import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
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
      
          <p><strong>Kód:</strong></p>
          <p>App.js</p>
          <ReactCodeMirror
            value={code}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        
        
          <p><strong>Výstup:</strong></p>
          <div style={{ border: "1px solid black" }}>
          <ValueAttributeOutput />
        
      </div>
    </>
  );
}
