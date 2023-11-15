import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MenuLayout from "./layouts/MenuLayout";
import More from "./pages/More";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodayWord from "./pages/TodayWord";
import Voca from "./pages/Voca";

//  /
//  /voca
//  /more
//  /signin
//  /signup

//  /signin-> App
//  /voca

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MenuLayout></MenuLayout>,
        children: [
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
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
