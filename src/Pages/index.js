import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Teams = lazy(() => import("./Teams"));
const About = lazy(() => import("./About"));
const NotFound = lazy(() => import("./NotFound"));
const Dashboard = lazy(() => import("./Dashboard"));

// eslint-disable-next-line import/no-anonymous-default-export
export default { About, Dashboard, Home, NotFound, Teams };
