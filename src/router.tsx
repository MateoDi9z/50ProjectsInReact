import { createBrowserRouter } from "react-router-dom";

import App from "./App";

// Projects
import ExpandingCards from "./projects/1-expanding-cards/";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/expanding-cards/",
    element: <ExpandingCards />,
  },
]);
