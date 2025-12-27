import BaseNode from "./BaseNode";

export const MathNode = () => {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <div>Add / Multiply values</div>
    </BaseNode>
  );
};
