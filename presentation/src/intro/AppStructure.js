import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { useEffect, useState } from "react";

export default function AppStructure() {
  const [packageJsonBefore, setPackageJsonBefore] = useState("");
  const [packageJsonAfter, setPackageJsonAfter] = useState("");
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
    })();
  }, []);

  const index_js = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();`;

  const babel_in = `root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  const babel_out = `root.render(
/*#__PURE__*/ React.createElement(
  React.StrictMode,
  null,
  /*#__PURE__*/ React.createElement(App, null)
)
);`;

  const index_html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

  const app_js = `import "./App.css";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <p>From React</p>
    </>
  );
}

export default App;
`;

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

        <li>src/index.js</li>

        <ReactCodeMirror
          value={index_js}
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
          value={index_html}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[html()]}
        />
        <li>app.js</li>
        <ReactCodeMirror
          value={app_js}
          readOnly
          style={{ margin: "15px 0px 15px 0px" }}
          extensions={[javascript({ jsx: true })]}
        />
      </ul>
    </>
  );
}
