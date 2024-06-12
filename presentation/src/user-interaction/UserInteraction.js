import { Link, Outlet } from "react-router-dom";

export default function UserInteraction() {
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
        <h2 style={{ margin: "10px 0 0 0", width: "50%" }}>
          Interakce s uživatelem
        </h2>
        <nav style={{ width: "50%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="events">Události</Link> |{" "}
          <Link to="component-state">Stav komponenty</Link> |{" "}
          <Link to="input">Input</Link> | <Link to="form">Form</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
