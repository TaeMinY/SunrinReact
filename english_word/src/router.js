import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import More from "./pages/More";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodayWord from "./pages/TodayWord";
import Voca from "./pages/Voca";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "",
        element: <TodayWord />,
      },
      {
        path: "voca",
        element: <Voca />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
]);

export default router;
