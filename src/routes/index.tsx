import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/landing/home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
export default router;
