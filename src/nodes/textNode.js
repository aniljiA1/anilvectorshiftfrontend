import { useState, useRef, useEffect } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // 🔹 Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // 🔹 Extract variables like {{input}}
  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;
    return [...text.matchAll(regex)].map((match) => match[1]);
  };

  const variables = extractVariables(text);

  return (
    <BaseNode title="Text" inputs={variables} outputs={[`${id}-output`]}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{ resize: "none", overflow: "hidden" }}
      />
    </BaseNode>
  );
};
