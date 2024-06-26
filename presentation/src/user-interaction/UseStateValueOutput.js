import { useState } from "react";

export default function UseStateValueOutput() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <span>{count} </span>
      <button onClick={handleClick}>++</button>
    </>
  );
}
