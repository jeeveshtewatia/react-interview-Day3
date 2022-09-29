import React from "react";
import HookCounter from "./HookCounter";
import IntervalHookCounter from "./UseEffect";
import HookMemo from "./UseMemo";
import HookReaducertwo from "./UseReducer";

const Main = () => {
  return (
    <div>
      <h1>Question 1. Difference between Axios and fetch.</h1>
      <h2>Axios :</h2>
      <h4>
        Axios is a Javascript library used to make HTTP requests from node.js or
        XMLHttpRequests from the browser and it supports the Promise API that is
        native to JS ES6. It can be used intercept HTTP requests and responses
        and enables client-side protection against XSRF. It also has the ability
        to cancel requests
      </h4>
      <h2>Fetch :</h2>
      <h4>
        The Fetch API provides a fetch() method defined on the window object. It
        also provides a JavaScript interface for accessing and manipulating
        parts of the HTTP pipeline (requests and responses). The fetch method
        has one mandatory argument- the URL of the resource to be fetched. This
        method returns a Promise that can be used to retrieve the response of
        the request.
      </h4>
      <h1>Question 2. What is UseState Hook ?(Implementation)</h1>
      <h4>
        he React useState Hook allows us to track state in a function
        component.State generally refers to data or properties that need to be
        tracking in an application.
      </h4>
      <HookCounter />
      <h1>Question 3.What is useEffect Hook ?(Implementation)</h1>
      <IntervalHookCounter />
      <h1>Question 4.What is UseReducer Hook ?(Implementation)</h1>
      <HookReaducertwo />
      <h1>Question 5.What is UseMemo Hook ?(Implementation)</h1>
      <HookMemo />
    </div>
  );
};

export default Main;
