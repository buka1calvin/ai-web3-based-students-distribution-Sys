import Layout from "./layouts/Layout";
import PortalLayout from "./layouts/PortalLayout";
import TeacherPortalLayout from "./layouts/TeacherPortalLayout";
import { RouteConfig } from "./types/routes/ route";
import Home from "./pages/home";
import MarkDistribution from "./pages/markDistribution";

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
      },
    ],
  },
  {
    path: "/distribute",
    element: Layout,
    protected: false,
    children: [
      {
        path: "",
        element: MarkDistribution,
        protected: true,
      },
    ],
  },
];

export default routes;
