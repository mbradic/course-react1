export default function ValueAttributeOutput() {
  const title = "Learn react";
  const done = false;
  return (
    <>
      
        <input value={title} />
        <input
          
          type="checkbox"
          checked={done}
        />
      
    </>
  );
}
