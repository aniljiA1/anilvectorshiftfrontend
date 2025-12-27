import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    const res = await fetch("https://anilvectorshiftbackend.onrender.com/pipelines/parse" || "http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();

    alert(
      `Pipeline Analysis Result:\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
