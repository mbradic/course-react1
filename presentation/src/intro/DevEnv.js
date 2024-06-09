import ReactCodeMirror from "@uiw/react-codemirror";

export default function DevEnv() {
  return (
    <>
      <h3>Struktura aplikace</h3>
      <ul>
        <li>node.js</li>
        <li>npm</li>
        <li>create-react-app</li>
        <ReactCodeMirror
          value="npx create-react-app hello-world"
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          basicSetup={{ lineNumbers: false }}
        />
        <li>VS Code</li>
      </ul>
    </>
  );
}
