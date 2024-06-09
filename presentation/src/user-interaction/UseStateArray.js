import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import UseStateArrayOutput from "./UseStateArrayOutput";

export default function UseStateArray() {
  const code = `import { useState } from "react";

export default function UseStateArrayOutput() {
  const [counterCount, setCounterCount] = useState(1);
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounterCount((old) => old + 1);
    setCounters((old) => [
      ...old,
      { name: "Counter " + counterCount, count: 0 },
    ]);
  };

  const increaseCounter = (id) => {
    const newCounters = [...counters];
    ++newCounters[id].count;
    setCounters(newCounters);
  };

  return (
    <>
      <button onClick={addCounter}>Add counter</button>
      <hr />

      {counters.map((counter, index) => (
        
        <div key={index}>

          <span>
            {counter.name}: {counter.count}
          </span>

          <button onClick={() => increaseCounter(index)}>
            ++
          </button>

        </div>
      ))}
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
            value={code}
            readOnly
            extensions={[javascript({ jsx: true })]}
          />
        </div>
        <div style={{ margin: "0 0 0 50px", width: "50%" }}>
          <p>Výstup:</p>
          <UseStateArrayOutput />
        </div>
      </div>
    </>
  );
}
