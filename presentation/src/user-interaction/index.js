import Events from "./Events";
import UserInteraction from "./UserInteraction";
import ComponentState from "./ComponentState";
import UseStateValue from "./UseStateValue";
import UseStateFunction from "./UseStateFunction";
import UseStateObject from "./UseStateObject";
import UseStateArray from "./UseStateArray";
import Input from "./Input";
import ValueAttribute from "./ValueAttribute";
import OnChangeEvent from "./OnChangeEvent";
import OnChangeHandler from "./OnChangeHandler";

const userInteractionRoutes = {
  path: "user-interaction",
  element: <UserInteraction />,
  children: [
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "component-state",
      element: <ComponentState />,
      children: [
        {
          path: "use-state-value",
          element: <UseStateValue />,
        },
        {
          path: "use-state-function",
          element: <UseStateFunction />,
        },
        {
          path: "use-state-object",
          element: <UseStateObject />,
        },
        {
          path: "use-state-array",
          element: <UseStateArray />,
        },
      ],
    },
    {
      path: "input",
      element: <Input />,
      children: [
        {
          path: "value-attribute",
          element: <ValueAttribute />,
        },
        {
          path: "onchange-event",
          element: <OnChangeEvent />,
        },
        {
          path: "change-handler",
          element: <OnChangeHandler />,
        },
      ],
    },
  ],
};

export default userInteractionRoutes;
