import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { useEffect, useState } from "react";

export default function AppStructure() {
  const [packageJsonBefore, setPackageJsonBefore] = useState('')
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world/package.json"
      );
      const text = await response.text();
      setPackageJsonBefore(text);
    })();
  }, []);
  // const package_json = `{
  //   "name": "hello-world",
  //   "version": "0.1.0",
  //   "private": true,
  //   "dependencies": {
  //     "@testing-library/jest-dom": "^5.17.0",
  //     "@testing-library/react": "^13.4.0",
  //     "@testing-library/user-event": "^13.5.0",
  //     "react": "^18.2.0",
  //     "react-dom": "^18.2.0",
  //     "react-scripts": "5.0.1",
  //     "web-vitals": "^2.1.4"
  //   },
  //   "scripts": {
  //     "start": "react-scripts start",
  //     "build": "react-scripts build",
  //     "test": "react-scripts test",
  //     "eject": "react-scripts eject"
  //   },
  //   "eslintConfig": {
  //     "extends": [
  //       "react-app",
  //       "react-app/jest"
  //     ]
  //   },
  //   "browserslist": {
  //     "production": [
  //       ">0.2%",
  //       "not dead",
  //       "not op_mini all"
  //     ],
  //     "development": [
  //       "last 1 chrome version",
  //       "last 1 firefox version",
  //       "last 1 safari version"
  //     ]
  //   }
  // }
  // `;



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
          value={packageJsonBefore}
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
