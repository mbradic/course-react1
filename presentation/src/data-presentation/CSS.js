import { Link, Outlet } from "react-router-dom";
import StyleAttribute from "./StyleAttribute";
import ClassAttribute from "./ClassAttribute";
import ComponentCSS from "./ComponentCSS";

export default function CSS() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          //  borderBottom: "1px solid black",
          margin: "0 15px 0 0",
          padding: "0 0 5px 0",
        }}
      >
        <h3 style={{ margin: "10px 0 0 0", width: "25%" }}>CSS</h3>
        {/* <nav style={{ width: "75%", textAlign: "right", margin: "0 15px 0 0" }}>
          <Link to="style-attribute">Atribut style</Link> |{" "}
          <Link to="class-attribute">Atribut className</Link> |{" "}
          <Link to="component-css">CSS komponenty</Link>
        </nav> */}
      </div>

      <h4>Atribut style</h4>
      <StyleAttribute />
      <h4>Atribut className</h4>
      <ClassAttribute />
      <h4>CSS komponenty</h4>
      <ComponentCSS />
      

      <Outlet />
    </>
  );
}
