import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { useEffect, useState } from "react";

function Code({ url, value = "", extensions, basicSetup }) {
  const [code, setCode] = useState(value);
  useEffect(() => {
    (async function () {
      if (!value) {
        const response = await fetch(url);
        setCode(await response.text());
      }
    })();
  }, [url, value]);
  return (
    <div style={{ margin: "15px 0px 15px 0px" }}>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={extensions}
        basicSetup={basicSetup}
      />
    </div>
  );
}

function JsonCode({ url, value }) {
  return (
    <Code
      url={url}
      value={value}
      extensions={[json()]}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
    />
  );
}

function JsxCode({ url, value }) {
  return (
    <Code
      url={url}
      value={value}
      extensions={[javascript({ jsx: true })]}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
    />
  );
}

function HtmlCode({ url, value }) {
  return (
    <Code
      url={url}
      value={value}
      extensions={[html()]}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
    />
  );
}

function TextCode({ url, value }) {
  return (
    <Code
      url={url}
      value={value}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
        lineNumbers: false,
      }}
    />
  );
}

export default function AppStructure() {
  const babel_in = `const title = <h1>Hello world</h1>;`;
  const babel_out = `var title = /*#__PURE__*/ React.createElement("h1", null, "Hello world");`;

  return (
    <>
      <h3>Struktura aplikace</h3>

      <h4>/node_modules</h4>
      <p>lokální úložiště npm balíčků</p>

      <h4>/package.json</h4>
      <h5>Po vytvoření:</h5>
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-before/examples/hello-world/package.json" />

      <h5>Po úpravě:</h5>
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-after/examples/hello-world/package.json" />

      <h4>/src/App.jsx</h4>
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-app-js/examples/hello-world/src/App.js" />

      <p>JSX</p>
      <JsxCode value={babel_in} />

      <p> JavaScript</p>
      <JsxCode value={babel_out} />

      <h4>/public/index.html</h4>
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-html/examples/hello-world/public/index.html" />

      <h4>/src/index.jsx</h4>
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-js/examples/hello-world/src/index.js" />

      <h4>Spusťte aplikaci- příkazový řádek</h4>
      <TextCode value="npm start" />

      <h4>Výstup - příkazový řádek</h4>
      <TextCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-first-run-output.txt" />

      <h4> Prohlížeč - statické HTML</h4>
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-static-output.html" />

      <h4>Prohlížeč - DOM</h4>
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-dom-output.html" />

      <h4>package.json po prvním spuštění</h4>
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world/package.json" />
    </>
  );
}
