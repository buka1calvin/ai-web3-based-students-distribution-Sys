import Layout from "./layouts/Layout";
import PortalLayout from "./layouts/PortalLayout";
import { RouteConfig } from "./types/routes/ route";
import Home from "./pages/home";
import DistributedStudentsList from "./pages/admin/DistributedStudentsList";
import LocateStudents from "./pages/admin/LocateStudents";

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
    path: "/portal",
    element: PortalLayout,
    protected: false,
    children: [
      {
        path: "distributed",
        element: DistributedStudentsList,
        protected: false,
      },
      {
        path: "locate",
        element: LocateStudents,
        protected: false,
      },
    ],
  },
];

export default routes;
