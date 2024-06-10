import { Link, Outlet } from "react-router-dom";
import HiddenAttribute from "./HiddenAttribute";
import TernaryOperator from "./TernaryOpeator";
import LogicalAnd from "./LogicalAnd";

export default function ConditionalRendering() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          // borderBottom: "1px solid black",
          margin: "0 15px 0 0",
          padding: "0 0 5px 0",
        }}
      >
        <h3 style={{ margin: "10px 0 0 0", width: "25%" }}>
          Podmíněné renderování
        </h3>
        {/* <nav style={{ width: "75%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="hidden-attribute">Atribut hidden</Link> |{" "}
          <Link to="ternary-operator">Ternární operátor</Link> |{" "}
          <Link to="logical-and">Logické "a"</Link>
        </nav> */}
      </div>

      {/* <Outlet /> */}
      <h4>Atribut hidden</h4>
      <HiddenAttribute />

      <h4>Ternární operátor</h4>
      <TernaryOperator />

      <h4>Logické "a"</h4>
      <LogicalAnd />
    </>
  );
}
