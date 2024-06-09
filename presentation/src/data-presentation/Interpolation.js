import { Link, Outlet } from "react-router-dom";

export default function Interpolation() {
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
        <h3 style={{ margin: "10px 0 0 0", width: "25%" }}>Interpolace</h3>
        <nav style={{ width: "75%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="curly-braces">Složené závorky</Link> |{" "}
          <Link to="attribute-value">Hodnota atributu</Link> |{" "}
          <Link to="data-types">Datové typy</Link>
        </nav>
      </div>

      <Outlet />

      
    </>
  );
}
