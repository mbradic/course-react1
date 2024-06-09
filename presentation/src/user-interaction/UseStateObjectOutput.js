import { useState } from "react";

export default function UseStateObjectOutput() {
  const [counter, setCounter] = useState({ name: "Demo counter", count: 0 });
  const handleClick = () =>
    setCounter((old) => ({ ...old, count: counter.count + 1 }));
  const { name, count } = counter;
  return (
    <>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Count: </strong>
        {count}
      </p>
      <button onClick={handleClick}>++</button>
    </>
  );
}
