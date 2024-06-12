import ReactCodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

export function Code({ url, value = "", extensions, basicSetup }) {
  const [code, setCode] = useState(value);
  useEffect(() => {
    (async function () {
      if (!value) {
        const response = await fetch(url);
        setCode(await response.text());
      }
    })();
  }, [url, value]);
  return (
    <div style={{ margin: "15px 0px 15px 0px" }}>
      <ReactCodeMirror
        value={code}
        readOnly
        extensions={extensions}
        basicSetup={{
          ...basicSetup,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}
