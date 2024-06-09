import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function DataTypes() {
  const basic_interpolation = `function App() {
    const message = "Hello, world";
    const num = 42;

    const nullValue = null;
    const undefinedValue = undefined;
    const t = true;
    const f = false;

    const numArr = [1, 2, 3, 4];

    const todo = {
        id: 1,
        task: "Learn data presentation",
        done: false,
    };

    const jsx = <p>JSX</p>;
    const jsxArr = [<p>JSX1</p>, <p>JSX2</p>];

    return (
        <>
            <p>String: {message}</p>
            <p>Number: {num}</p>
            <p>Null: {nullValue}</p>
            <p>Undefined: {undefinedValue}</p>
            <p>Boolean: {f} {t}</p>
            <p>Number array: {numArr}</p>
            {/*<p>Object: {todo}</p>*/}
            <p>JSX: {jsx}</p>
            <p>JSX array: {jsxArr}</p>
        </>
    );
}`;
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <p>Kód:</p>
          <p>App.js</p>
          <ReactCodeMirror
            value={basic_interpolation}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <div>
            <p>String: Hello, world</p>
            <p>Number: 42</p>
            <p>Null: </p>
            <p>Undefined: </p>
            <p>Boolean: </p>
            <p>Number array: 1234</p>
            <p>
              JSX: <p>JSX</p>
            </p>
            <p>
              JSX array: <p>JSX1</p>
              <p>JSX2</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
