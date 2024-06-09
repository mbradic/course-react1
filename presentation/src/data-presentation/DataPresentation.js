import { Link, Outlet } from "react-router-dom";

export default function DataPresentation() {
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
        <h2 style={{ margin: "10px 0 0 0", width: "25%" }}>Prezentace dat</h2>
        <nav style={{ width: "75%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="interpolation">Interpolace</Link> |{" "}
          <Link to="conditional-rendering">Podmíněné renderování</Link> |{" "}
          <Link to="repeated-rendering">Opakované renderování</Link> |{" "}
          <Link to="CSS">CSS</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
