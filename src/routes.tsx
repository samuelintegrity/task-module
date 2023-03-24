import { Navigate } from "react-router";
import { TaskItem } from "./components";
import App from "./pages";
import Add from "./pages/add";
import ErrorPage from "./pages/error-page";

export const appRoutes = {
  add: {
    path: "/tasks/add",
    element: <Add />,
  },
  taskItem: {
    path: "/tasks/:taskId",
    element: <TaskItem />,
  },
  tasks: {
    path: "/tasks/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  home: {
    path: "/",
    element: <Navigate to="/tasks" replace />
  },
};
