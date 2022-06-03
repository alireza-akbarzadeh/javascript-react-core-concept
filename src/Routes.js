// React Routes Dom
import { useRoutes, Navigate } from "react-router-dom";
// Layout
import { DashboardLayout, DefaultDashboard } from "./layout";
// Pages
import * as Pages from "./Pages";
const { About, Dashboard, Home, NotFound, Teams } = Pages.default;

const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "apps", element: <Dashboard /> }],
    },

    {
      path: "/",
      element: <DefaultDashboard />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/teams", element: <Teams /> },
        { path: "/404", element: <NotFound /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Router;
