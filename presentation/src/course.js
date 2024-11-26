import JSFramework from "./intro/JSFramework";
import DevEnv from "./intro/DevEnv";
import AppStructure from "./intro/AppStructure";
import Interpolation from "./data-presentation/Interpolation";
import ConditionalRendering from "./data-presentation/ConditionalRendering";
import RepeatedRendering from "./data-presentation/RepeatedRendering";
import CSS from "./data-presentation/CSS";
import Events from "./user-interaction/Events";
import ComponentState from "./user-interaction/ComponentState";
import Input from "./user-interaction/Input";

export const course = {
    code: "REACTJS1",
    title: "Úvod do Reactu",
    lessons: [
      {
        path: "intro",
        shortTitle: "Úvod",
        fullTitle: "Úvod do Reactu",
        topics: [
          {
            path: "js-framework",
            shortTitle: "Framework",
            fullTitle: "JavaScript framework",
            element: <JSFramework />,
          },
          {
            path: "dev-env",
            shortTitle: "Prostředí",
            fullTitle: "Vývojové prostředí",
            element: <DevEnv />,
          },
          {
            path: "app-structure",
            shortTitle: "Struktura",
            fullTitle: "Struktura aplikace",
            element: <AppStructure />,
          },
        ],
      },
      {
        path: "data-presentation",
        shortTitle: "Prezentace",
        fullTitle: "Prezentace dat",
        topics: [
          {
            path: "interpolation",
            shortTitle: "Interpolace",
            fullTitle: "Interpolace",
            element: (
              <Interpolation
                topic={{
                  path: "interpolation",
                  shortTitle: "Interpolace",
                  fullTitle: "Interpolace",
                }}
              />
            ),
          },
          {
            path: "conditional-rendering",
            shortTitle: "Podmíněné",
            fullTitle: "Podmíněné renderování",
            element: <ConditionalRendering />,
          },
          {
            path: "repeated-rendering",
            shortTitle: "Opakované",
            fullTitle: "Opakované renderování",
            element: <RepeatedRendering />,
          },
          {
            path: "css",
            shortTitle: "CSS",
            fullTitle: "Atribut style a CSS",
            element: <CSS />,
          },
        ],
      },
      {
        path: "user-interaction",
        shortTitle: "Interakce",
        fullTitle: "Interakce s uživatelem",
        topics: [
          {
            path: "events",
            shortTitle: "Události",
            fullTitle: "Reakce na události",
            element: <Events />,
          },
          {
            path: "component-state",
            shortTitle: "Stav",
            fullTitle: "Stav komponenty",
            element: <ComponentState />,
          },
          {
            path: "input",
            shortTitle: "Vstupy",
            fullTitle: "Uživatelské vstupy",
            element: <Input />,
          },
        ],
      },
    ],
  };
  