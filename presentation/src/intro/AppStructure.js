import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { useEffect, useState } from "react";
import { langs } from "@uiw/codemirror-extensions-langs"


function JsonCode({ url }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      setCode(await response.text());
    })();
  }, [url]);

  return (
    <div style={{ margin: "15px 0px 15px 0px" }}>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={[json()]}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}

function JsxCode({ url, value = "" }) {
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
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}

function HtmlCode({ url, value = "" }) {
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
        extensions={[html()]}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}

function PowershellCode({ url, value = "" }) {
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
        //extensions={[langs.powershell()]}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          lineNumbers: false
        }}
      
      />
    </div>
  );
}

export default function AppStructure() {
  // const [packageJsonBefore, setPackageJsonBefore] = useState("");
  // const [packageJsonAfter, setPackageJsonAfter] = useState("");
  // const [appJs, setAppJs] = useState("");
  //const [indexHtml, setIndexHtml] = useState("");
  //const [indexJs, setIndexJs] = useState("");
  //const [firstRunOutput, setFirstRunOutput] = useState("");
  //const [htmlOutput, setHtmlOutput] = useState("");
  // const [domOutput, setDomOutput] = useState("");
  //const [packageJsonFinal, setPackageJsonFinal] = useState("");

  useEffect(() => {
    async function fetchText(url) {
      const response = await fetch(url);
      return await response.text();
    }
    (async function () {
      // setPackageJsonAfter(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-after/examples/hello-world/package.json"
      //   )
      // );

      // setAppJs(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-app-js/examples/hello-world/src/App.js"
      //   )
      // );

      // setIndexHtml(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-html/examples/hello-world/public/index.html"
      //   )
      // );

      // setIndexJs(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-js/examples/hello-world/src/index.js"
      //   )
      // );

      // setFirstRunOutput(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-first-run-output.txt"
      //   )
      // );

      // setHtmlOutput(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-static-output.html"
      //   )
      // );

      // setDomOutput(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-dom-output.html"
      //   )
      // );

      // setPackageJsonFinal(
      //   await fetchText(
      //     "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world/package.json"
      //   )
      // );
    })();
  }, []);

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
      {/* <ReactCodeMirror
        value={indexHtml}
        readOnly
        style={{ margin: "15px 0px 15px 0px" }}
        extensions={[html()]}
        basicSetup={{ highlightActiveLine: false }}
      /> */}

      <h4>/src/index.jsx</h4>
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-js/examples/hello-world/src/index.js" />
      {/* <ReactCodeMirror
        value={indexJs}
        readOnly
        style={{ margin: "15px 0px 15px 0px" }}
        extensions={[javascript({ jsx: true })]}
        basicSetup={{ highlightActiveLine: false }}
      /> */}

      <h4>Spusťte aplikaci- příkazový řádek</h4>
      <PowershellCode value="npm start" />
      {/* <ReactCodeMirror
        value="npm start"
        readOnly
        style={{ margin: "15px 0px 15px 0px" }}
        basicSetup={{ lineNumbers: false, highlightActiveLine: false }}
      /> */}

      <h4>Výstup - příkazový řádek</h4>
      <PowershellCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-first-run-output.txt" />
      {/* <ReactCodeMirror
        style={{ margin: "15px 0px 15px 0px" }}
        value={firstRunOutput}
        readOnly
        extensions={[json()]}
        basicSetup={{ lineNumbers: false, highlightActiveLine: false }}
      /> */}

      <h4> Prohlížeč - statické HTML</h4>
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-static-output.html" />
      {/* <ReactCodeMirror
        style={{ margin: "15px 0px 15px 0px" }}
        value={htmlOutput}
        readOnly
        extensions={[html()]}
        basicSetup={{ highlightActiveLine: false }}
      /> */}

      <h4>Prohlížeč - DOM</h4>
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-dom-output.html" />
      {/* <ReactCodeMirror
        style={{ margin: "15px 0px 15px 0px" }}
        value={domOutput}
        readOnly
        extensions={[html()]}
        basicSetup={{ highlightActiveLine: false }}
      /> */}

      <h4>package.json po prvním spuštění</h4>
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world/package.json" />
      {/* <ReactCodeMirror
        style={{ margin: "15px 0px 15px 0px" }}
        value={packageJsonFinal}
        readOnly
        extensions={[html()]}
        basicSetup={{ highlightActiveLine: false }}
      /> */}
    </>
  );
}
