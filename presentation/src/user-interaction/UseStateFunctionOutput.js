import { useState } from "react";

export default function UseStateFunctionOutput() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(old => old+1);
  return (
    <>
      <span>{count} </span>
      <button onClick={handleClick}>++</button>
    </>
  );
}
