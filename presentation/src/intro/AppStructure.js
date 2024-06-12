import { json } from "@codemirror/lang-json";
import { html } from "@codemirror/lang-html";
import { Code } from "../Code";
import { JsxCode } from "../JsxCode";

function JsonCode({ url, value }) {
  return (
    <Code
      {...{
        url,
        value,
        extensions: [json()],
      }}
    />
  );
}

function HtmlCode({ url, value }) {
  return <Code url={url} value={value} extensions={[html()]} />;
}

function TextCode({ url, value }) {
  return <Code url={url} value={value} basicSetup={{ lineNumbers: false }} />;
}
const babel_in = `const title = <h1>Hello world</h1>;`;
const babel_out = `var title = /*#__PURE__*/ React.createElement("h1", null, "Hello world");`;

const appStructureSubTopics = [
  {
    path: "node_modules",
    shortTitle: "node_modules",
    fullTitle: "/node_modules",
    content: <p>lokální úložiště npm balíčků</p>,
  },
  {
    path: "package-json-before",
    shortTitle: "package.json před",
    fullTitle: "package.json - Před úpravou",
    content: (
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-before/examples/hello-world/package.json" />
    ),
  },
  {
    path: "package-json-after",
    shortTitle: "package.json po",
    fullTitle: "package.json - Po úpravě",
    content: (
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--package-json-after/examples/hello-world/package.json" />
    ),
  },
  {
    path: "app-jsx",
    shortTitle: "app.jsx",
    fullTitle: "/src/app.jsx",
    content: (
      <>
        <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-app-js/examples/hello-world/src/App.js" />

        <p>JSX</p>
        <JsxCode value={babel_in} />

        <p>JavaScript</p>
        <JsxCode value={babel_out} />
      </>
    ),
  },
  {
    path: "index-html",
    shortTitle: "index.html",
    fullTitle: "/public/index.html",
    content: (
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-html/examples/hello-world/public/index.html" />
    ),
  },
  {
    path: "index-jsx",
    shortTitle: "index.jsx",
    fullTitle: "/src/index.jsx",
    content: (
      <JsxCode url="https://raw.githubusercontent.com/mbradic/course-react1/intro--app-structure--create-index-js/examples/hello-world/src/index.js" />
    ),
  },
  {
    path: "npm-start",
    shortTitle: "npm start",
    fullTitle: "Spusťte aplikaci - příkazový řádek",
    content: <TextCode value="npm start" />,
  },
  {
    path: "output",
    shortTitle: "Výstup",
    fullTitle: "Výstup - příkazový řádek",
    content: (
      <TextCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-first-run-output.txt" />
    ),
  },
  {
    path: "browser-html",
    shortTitle: "Prohlížeč - HTML",
    fullTitle: "Výstup - prohlížeč - HTML",
    content: (
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-static-output.html" />
    ),
  },
  {
    path: "browser-dom",
    shortTitle: "Prohlížeč - DOM",
    fullTitle: "Výstup - prohlížeč - DOM",
    content: (
      <HtmlCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world-dom-output.html" />
    ),
  },
  {
    path: "package-json-final",
    shortTitle: "package.json - po prvním spuštění",
    fullTitle: "package.json - po prvním spuštění",
    content: (
      <JsonCode url="https://raw.githubusercontent.com/mbradic/course-react1/main/examples/hello-world/package.json" />
    ),
  },
];

function AppStructure() {
  return (
    <>
      <h3>Struktura aplikace</h3>

      {appStructureSubTopics.map((st) => (
        <div key={st.path} className="dont-split">
          <h4>{st.fullTitle}</h4>
          {st.content}
        </div>
      ))}
    </>
  );
}

export default AppStructure;
