import { Link, Outlet } from "react-router-dom";
import UseStateValue from "./UseStateValue";
import UseStateFunction from "./UseStateFunction";
import UseStateObject from "./UseStateObject";
import UseStateArray from "./UseStateArray";

export default function ComponentState() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          //borderBottom: "1px solid black",
          margin: "0 15px 0 0",
          padding: "0 0 5px 0",
        }}
      >
        <h3 style={{ margin: "10px 0 0 0", width: "50%" }}>Stav komponenty</h3>
        {/* <nav style={{ width: "50%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="use-state-value">useState(value)</Link> |{" "}
          <Link to="use-state-function">useState(function)</Link> |{" "}
          <Link to="use-state-object">objekt</Link> |{" "}
          <Link to="use-state-array">pole</Link>
        </nav> */}
      </div>

      {/* <Outlet /> */}
      <h4>useState(value)</h4>
      <UseStateValue />

      <h4>useState(function)</h4>
      <UseStateFunction />

      <h4>Objekt jako stav komponenty</h4>
      <UseStateObject />

      <h4>Pole jako stav komponenty</h4>
      <UseStateArray />
    </>
  );
}
