🚀 VectorShift Pipeline Builder – Frontend

This repository contains the frontend implementation for the VectorShift Frontend Technical Assessment.
It is a visual pipeline builder built using React and React Flow, allowing users to create node-based workflows and validate them via backend integration.

🛠 Tech Stack

React (CRA)

React Flow

Zustand (state management)

JavaScript (ES6+)

CSS (index.css)

FastAPI Backend (integration)

✨ Features
✅ Node Abstraction (Part 1)

Created a reusable BaseNode component

Reduced duplication across node implementations

Easy to scale and add new nodes

Available Nodes:

Input

LLM

Output

Text

Math

Condition

Delay

API Request

Logger

🎨 Styling (Part 2)

Unified, clean UI design

Consistent node layout and spacing

Grid snapping, minimap, and controls via React Flow

🧠 Text Node Enhancements (Part 3)

Auto-resizing textarea (height grows with content)

Dynamic variable detection using {{ variable }}

Automatically generates input handles for detected variables

Example:

Hello {{name}}, your score is {{score}}


➡️ Creates two dynamic input handles: name, score

🔌 Backend Integration (Part 4)

Sends pipeline graph (nodes & edges) to backend

Receives:

Total number of nodes

Total number of edges

DAG validation result

Displays results in a user-friendly alert


Pipeline UI

Text node with dynamic handles

Submit alert result


2️⃣ Install dependencies
npm install

3️⃣ Start the app
npm start


Frontend will run at:

http://localhost:3000

Live deploy: https://anilvectorshiftfrontend.vercel.app
