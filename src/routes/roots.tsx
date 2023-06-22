import { createBrowserRouter } from "react-router-dom";
import routerDashboard from "./dashboard";
import mainRoute from "./mainroute";

const router = createBrowserRouter([
  ...mainRoute,
  ...routerDashboard,
]);

export default router;
