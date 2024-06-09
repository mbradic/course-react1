import ReactCodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

export default function DevEnv() {
  const [createHelloWorldPs, setCreateHelloWorldPs] = useState("");
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/create-hello-world.ps1"
      );
      const text = await response.text();
      setCreateHelloWorldPs(text);
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
          <p>create-hello-world.ps1</p>
          <ReactCodeMirror
            value={createHelloWorldPs}
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
