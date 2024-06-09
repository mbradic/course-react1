import { useState } from "react";

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
            {counter.name}: {counter.count}{" "}
          </span>
          <button onClick={() => increaseCounter(index)}>++</button>
        </div>
      ))}
    </>
  );
}
