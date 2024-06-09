import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { useEffect, useState } from "react";

export default function AppStructure() {
  const [packageJsonBefore, setPackageJsonBefore] = useState("");
  const [packageJsonAfter, setPackageJsonAfter] = useState("");
  const [appJs, setAppJs] = useState("");
  const [indexHtml, setIndexHtml] = useState("");
  const [indexJs, setIndexJs] = useState("");

  useEffect(() => {
    async function fetchText(url) {
      const response = await fetch(url);
      return await response.text();
    }
    (async function () {
      setPackageJsonBefore(
        await fetchText(
          "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-before/examples/hello-world/package.json"
        )
      );

      setPackageJsonAfter(
        await fetchText(
          "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-after/examples/hello-world/package.json"
        )
      );

      setAppJs(
        await fetchText(
          "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-app-js/examples/hello-world/src/App.js"
        )
      );

      setIndexHtml(
        await fetchText(
          "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-html/examples/hello-world/public/index.html"
        )
      );

      setIndexJs(
        await fetchText(
          "https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-js/examples/hello-world/src/index.js"
        )
      );
    })();
  }, []);

  //   const index_js = `import React from 'react';
  // import ReactDOM from 'react-dom/client';
  // import './index.css';
  // import App from './App';
  // import reportWebVitals from './reportWebVitals';

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );

  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();`;

  const babel_in = `const title = <h1>Hello world</h1>;`;

  const babel_out = `var title = /*#__PURE__*/ React.createElement("h1", null, "Hello world");`;

  return (
    <>
      <h3>Struktura aplikace</h3>
      <ul>
        <li>paskage.json a node_modules</li>

        <p>Po vytvoření:</p>
        <ReactCodeMirror
          value={packageJsonBefore}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[json()]}
        />
        <p>Po úpravě:</p>
        <ReactCodeMirror
          value={packageJsonAfter}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[json()]}
        />

        <li>App.js</li>
        <ReactCodeMirror
          value={appJs}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[javascript({ jsx: true })]}
        />

        <li>JSX a Babel.js</li>
        <div style={{ display: "flex", margin: "15px" }}>
          <div>
            JSX
            <ReactCodeMirror
              value={babel_in}
              readOnly
              style={{ margin: "15px 0px 15px 0px" }}
              extensions={[javascript({ jsx: true })]}
            />
          </div>
          <span style={{ margin: "75px 20px 0 20px" }}>
            <code>{"->"}</code>
          </span>
          <div>
            JavaScript
            <ReactCodeMirror
              value={babel_out}
              readOnly
              style={{ margin: "15px 0px 15px 0px" }}
              extensions={[javascript({ jsx: true })]}
            />
          </div>
        </div>

        <li>public/index.html</li>
        <ReactCodeMirror
          value={indexHtml}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[html()]}
        />

        <li>src/index.js</li>
        <ReactCodeMirror
          value={indexJs}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[javascript({ jsx: true })]}
        />

        <li>Spusťte aplikaci</li>
        <ReactCodeMirror
          value="npm start"
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[json()]}
          basicSetup={{ lineNumbers: false, highlightActiveLine: false }}
        />
      </ul>
    </>
  );
}
