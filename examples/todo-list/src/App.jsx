import { useState } from "react";

function App() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const handleClick = () => setCount((old) => old + 1);
  return (
    <>
      <span>{count} </span>
      <button onClick={handleClick}>++</button>
    </>
  );
}

export default App;
