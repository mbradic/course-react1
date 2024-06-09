import ReactCodeMirror from "@uiw/react-codemirror";

export default function DevEnv() {
  return (
    <>
      <h3>Vývojové prostředí</h3>
      <ul>
        <li>node.js</li>
        <li>npm</li>
        <li style={{textDecoration: "line-through"}}>create-react-app</li>
        <ReactCodeMirror
          value="npx create-react-app hello-world"
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          basicSetup={{ lineNumbers: false }}
        />
        <li>
          <ReactCodeMirror
            value={`md hello-world\ncd hello-world\nnpm init -y\nnpm i react-dom\nnpm i -D react-scripts`}
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
