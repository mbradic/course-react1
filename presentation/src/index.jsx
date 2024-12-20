import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lesson from "./Lesson";
import AppStructure from "./intro/AppStructure";
import DevEnv from "./intro/DevEnv";
import DataPresentation from "./data-presentation/DataPresentation";
import Interpolation from "./data-presentation/Interpolation";
import CurlyBraces from "./data-presentation/CurlyBraces";
import AttributeValues from "./data-presentation/AttributeValues";
import DataTypes from "./data-presentation/DataTypes";
import ConditionalRendering from "./data-presentation/ConditionalRendering";
import HiddenAttribute from "./data-presentation/HiddenAttribute";
import TernaryOperator from "./data-presentation/TernaryOpeator";
import LogicalAnd from "./data-presentation/LogicalAnd";
import RepeatedRendering from "./data-presentation/RepeatedRendering";
import CSS from "./data-presentation/CSS";
import StyleAttribute from "./data-presentation/StyleAttribute";
import ClassAttribute from "./data-presentation/ClassAttribute";
import ComponentCSS from "./data-presentation/ComponentCSS";
import userInteractionRoutes from "./user-interaction";
import Print from "./Print";
import { course } from "./course";
import Topic from "./Topic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "intro",
        element: <Lesson />,
        children: course.lessons[0].topics.map((topic) => ({
          path: topic.path,
          element: topic.element,
        })),
      },
      {
        path: "data-presentation",
        element: <Lesson />,
        children: course.lessons[1].topics.map((topic) => ({
          path: topic.path,
          element: topic.element,
        })),
      },
      {
        path: "data-presentation",
        element: <Topic />,
        children: [
          {
            path: "interpolation",
            element: <Interpolation />,
            children: [
              {
                path: "curly-braces",
                element: <CurlyBraces />,
              },
              {
                path: "attribute-value",
                element: <AttributeValues />,
              },
              {
                path: "data-types",
                element: <DataTypes />,
              },
            ],
          },
          {
            path: "conditional-rendering",
            element: <ConditionalRendering />,
            children: [
              {
                path: "hidden-attribute",
                element: <HiddenAttribute />,
              },
              {
                path: "ternary-operator",
                element: <TernaryOperator />,
              },
              {
                path: "logical-and",
                element: <LogicalAnd />,
              },
            ],
          },
          {
            path: "repeated-rendering",
            element: <RepeatedRendering />,
          },
          {
            path: "css",
            element: <CSS />,
            children: [
              {
                path: "style-attribute",
                element: <StyleAttribute />,
              },
              {
                path: "class-attribute",
                element: <ClassAttribute />,
              },
              {
                path: "component-css",
                element: <ComponentCSS />,
              },
            ],
          },
          { path: "app-structure", element: <AppStructure /> },
          { path: "dev-env", element: <DevEnv /> },
        ],
      },
      userInteractionRoutes,
    ],
  },
  {
    path: "print",
    element: <Print course={course} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider {...{ router }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
