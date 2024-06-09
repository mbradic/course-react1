import ReactCodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

export default function DevEnv() {
  const [createHelloWorldBat, setCreateHelloWorldBat] = useState("");
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/create-hello-world.bat"
      );
      const text = await response.text();
      setCreateHelloWorldBat(text);
    })();
  }, []);
  return (
    <>
      <h3>Vývojové prostředí</h3>
      <ul>
        <li>node.js</li>
        <li>npm</li>
        <li style={{ textDecoration: "line-through" }}>create-react-app</li>
        <ReactCodeMirror
          value="npx create-react-app hello-world"
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          basicSetup={{ lineNumbers: false }}
        />
        <li>
          <ReactCodeMirror
            value={createHelloWorldBat}
            readOnly
            style={{ margin: "15px 0px 15px 0px" }}
            basicSetup={{ lineNumbers: false }}
          />
        </li>
        <li>VS Code</li>
      </ul>
    </>
  );
}
