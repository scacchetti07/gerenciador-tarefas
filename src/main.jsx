import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

// Fazemos a inserção do HTML pelo JavaScript nessa linha de comando
createRoot(document.getElementById("root")).render(
  // StrictMode => Ajuda a gente no desenvolvimento da aplicação (sem muitos detalhes por agora)
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
