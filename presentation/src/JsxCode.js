import { javascript } from "@codemirror/lang-javascript";
import { Code } from "./Code";

export function JsxCode({ url, value }) {
  return (
    <Code url={url} value={value} extensions={[javascript({ jsx: true })]} />
  );
}
