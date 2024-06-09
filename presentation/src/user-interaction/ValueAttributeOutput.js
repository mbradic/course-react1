export default function ValueAttributeOutput() {
  const title = "Learn react";
  const done = false;
  return (
    <>
      <input value={title} />
      <input
        style={{ width: "30px", height: "30px" }}
        type="checkbox"
        checked={done}
      />
    </>
  );
}
