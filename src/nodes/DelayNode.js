import BaseNode from "./BaseNode";

export const DelayNode = () => {
  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <div>Delay execution</div>
    </BaseNode>
  );
};
