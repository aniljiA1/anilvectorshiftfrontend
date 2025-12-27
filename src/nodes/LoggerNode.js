import BaseNode from "./BaseNode";

export const LoggerNode = () => {
  return (
    <BaseNode title="Logger" inputs={["input"]}>
      <div>Log data</div>
    </BaseNode>
  );
};
