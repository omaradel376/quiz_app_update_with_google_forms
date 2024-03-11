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
import ClassOne from "./components/examesPage/classes/class one/ClassOne";
import ClassTwo from "./components/examesPage/classes/class two/ClassTwo";
import WelcomeExam from "./components/examesPage/WelcomeExam";
import ClassOneDegree from "./components/showDegree/classes/class one/ClassOneDegree";
import ClassTwoDegree from "./components/showDegree/classes/class two/ClassTwoDegree";
import WelcomeDegree from "./components/showDegree/WelcomeDegree";

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
        children: [
          {
            path: "",
             element:<WelcomeExam/> ,
          },
          {
            path: "الاول الثانوي",
             element: <ClassOne/>
          },
          {
            path: "الثاني الثانوي",
             element: <ClassTwo />
          },
        ]
      },
      {
        path: "/الدرجات",
        element: <ShowDegree />,
        children: [
          {
            path: "",
             element:<WelcomeDegree/> ,
          },
          {
            path: "الاول الثانوي",
             element: <ClassOneDegree/>
          },
          {
            path: "الثاني الثانوي",
             element: <ClassTwoDegree/>
          },
        ]
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
