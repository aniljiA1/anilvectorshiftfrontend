import BaseNode from "./BaseNode";

export const ConditionNode = () => {
  return (
    <BaseNode title="Condition" inputs={["value"]} outputs={["true", "false"]}>
      <div>Conditional logic</div>
    </BaseNode>
  );
};
