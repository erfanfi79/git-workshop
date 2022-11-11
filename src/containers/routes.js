// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views

import Home from "./Home.js";

const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },

];
export default routes;
