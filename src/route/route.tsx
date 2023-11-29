import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conclusion from "./conclusion";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/conclusion",
    element: <Conclusion />,
    children: [],
  },
]);

export default Route;
