import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContainerOfQuiz from "./components/containerOfQuiz/ContainerOfQuiz"; // container of quiz
import ExamesPages from "./components/examesPage/ExamesPage"; // the page that container the exames
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "الاختبارات",
        element: <ExamesPages />,
      },
      {
        // path: "/الاختبار",
        path: "/الاختبار/:id",
        element: <ContainerOfQuiz />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

