import CurlyBraces from "./CurlyBraces";
import AttributeValues from "./AttributeValues";
import DataTypes from "./DataTypes";
import Topic from "../Topic";

export default function Interpolation({ topic }) {
  return (
    <>
      {/* <h3>Interpolace</h3> */}
      <Topic topic={topic}>
        <div className="dont-split">
          <h4>Interpolace textu</h4>
          <CurlyBraces />
        </div>

        <div className="dont-split">
          <h4>Hodnoty atributů</h4>
          <AttributeValues />
        </div>

        <div className="dont-split">
          <h4>Datové typy</h4>
          <DataTypes />
        </div>
      </Topic>
    </>
  );
}
