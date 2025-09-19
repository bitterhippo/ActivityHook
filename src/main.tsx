import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

// createRoot expects a container
const root = createRoot(container);

// render expects a ReactNode
root.render(<App />);
