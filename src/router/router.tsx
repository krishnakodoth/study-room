import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShowDocument from "../component/ShowDocument";
// import { Offers } from "../components/offers/Offers";
// import { Graph } from "../components/graph/Graph";

const Routes = Object.freeze({
  Root: "/",
  Doc: "/doc/",
});

const router = createBrowserRouter([{
  path:Routes.Root,
  element:<App />,
  children: [
    {
      path: "/",
      element: <ShowDocument />,
      // element: <Navigate to={Routes.Offers} replace />,
    },
    {
      path: Routes.Doc+'*',
      element: <ShowDocument />,
    }
  ],
}]);

export default router;

export { Routes };
