import Layout from "./layouts/Layout";
import PortalLayout from "./layouts/PortalLayout";
import TeacherPortalLayout from "./layouts/TeacherPortalLayout";
import { RouteConfig } from "./types/routes/ route";

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
      {
        path: "profile/:name",
        element: Profile,
        protected: true,
        allowedRoles: ["admin", "student", "teacher"],
      },
      {
        path: "profile/create",
        element: ProfileCreation,
        protected: true,
        allowedRoles: ["admin", "student", "teacher"],
      },
      { path: "/signup", element: Signup, protected: false },
      { path: "/login", element: Login, protected: false },
    ],
    allowedRoles: ["admin", "student", "teacher"],
  },
  {
    path: "/student-portal",
    element: PortalLayout,
    children: [
      {
        path: "",
        element: OverView,
        protected: true,
        allowedRoles: ["student"],
      },
      {
        path: "courses",
        element: CoursesTable,
        protected: true,
        allowedRoles: ["student"],
      },
      {
        path: "my-marks",
        element: MarksTable,
        protected: true,
        allowedRoles: ["student"],
      },
    ],
    protected: true,
    allowedRoles: ["student"],
  },
  {
    path: "/teacher-portal",
    element: TeacherPortalLayout,
    children: [
      {
        path: "",
        element: TeacherOverView,
        protected: true,
        allowedRoles: ["teacher"],
      },
      {
        path: "students",
        element: StudentsTable,
        protected: true,
        allowedRoles: ["teacher"],
      },
      {
        path: "students-marks",
        element: StudentsMarks,
        protected: true,
        allowedRoles: ["teacher"],
      },
      {
        path: "students-marks/mark",
        element: MarkingComponent,
        protected: true,
        allowedRoles: ["teacher"],
      },
      {
        path: "students-marks/view/:id",
        element: StudentMarksDetail,
        protected: true,
        allowedRoles: ["teacher"],
      },
    ],
    protected: true,
    allowedRoles: ["teacher"],
  },
];

export default routes;
