import BaseNode from "./BaseNode";

export const APIRequestNode = () => {
  return (
    <BaseNode title="API Request" inputs={["url"]} outputs={["response"]}>
      <div>Fetch external API</div>
    </BaseNode>
  );
};
