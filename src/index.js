import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExamesPages from "./components/examesPage/ExamesPage"; // the page that container the exames
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import ShowDegree from "./components/showDegree/ShowDegree";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
        path: "/الدرجات",
        element: <ShowDegree />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
