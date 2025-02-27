import Layout from "./layouts/Layout";
import PortalLayout from "./layouts/PortalLayout";
import TeacherPortalLayout from "./layouts/TeacherPortalLayout";
import { RouteConfig } from "./types/routes/ route";
import Home from "./pages/home";

const routes: RouteConfig[] = [
  {
    path: "/",
    element: Layout,
    protected: false,
    children: [
      {
        path: "",
        element: Home,
        protected: false,
        allowedRoles: ["admin", "student", "teacher"],
      },
    ],
    allowedRoles: ["admin", "student", "teacher"],
  },
];

export default routes;
