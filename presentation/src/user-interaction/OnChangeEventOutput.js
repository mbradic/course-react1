import { useState } from "react";

export default function OnChangeEventOutput() {
  const [title, setTitle] = useState("Learn react");
  const [done, setDone] = useState(false);
  const changeTitle = (e) => setTitle(e.target.value);
  const changeDone = (e) => setDone(e.target.checked);
  return (
    <>
      <input value={title} onChange={changeTitle} />
      <input
        type="checkbox"
        checked={done}
        onChange={changeDone}
      />
      <p>Title: {title}</p>
      <p>Done: {done ? "yes" : "no"}</p>
    </>
  );
}
