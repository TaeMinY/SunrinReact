import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import UserPost from "./pages/UserPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "info/:id",
        element: <Info />,
        children: [
          {
            path: "post",
            element: <UserPost />, // /info/123123/post
          },
        ],
        action: async ({ request, params }) => {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          });

          return {};
          // API처리
        },
        loader: async ({ request, params }) => {
          console.log("loader");
          // API 통신
          return {
            username: "홍길동",
            posts: [
              { title: "게시글 제목", text: "게시글 내용" },
              { title: "게시글2 제목", text: "게시글2 내용" },
            ],
          };
        },
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
