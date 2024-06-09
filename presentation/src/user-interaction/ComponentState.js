import { Link, Outlet } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          borderBottom: "1px solid black",
          margin: "0 15px 0 0",
          padding: "0 0 5px 0",
        }}
      >
        <h3 style={{ margin: "10px 0 0 0", width: "50%" }}>Stav komponenty</h3>
        <nav style={{ width: "50%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="use-state-value">useState(value)</Link> |{" "}
          <Link to="use-state-function">useState(function)</Link> |{" "}
          <Link to="use-state-object">objekt</Link> |{" "}
          <Link to="use-state-array">pole</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}