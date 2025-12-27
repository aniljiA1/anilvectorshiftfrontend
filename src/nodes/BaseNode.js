import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  description,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) {
  return (
    <div className="node-container" style={style}>
      <div className="node-header">{title}</div>
      {description && <div className="node-desc">{description}</div>}

      {/* Left Handles */}
      {inputs.map((input, idx) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 60 + idx * 20 }}
        />
      ))}

      {/* Content */}
      <div className="node-body">{children}</div>

      {/* Right Handles */}
      {outputs.map((output, idx) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 60 + idx * 20 }}
        />
      ))}
    </div>
  );
}
