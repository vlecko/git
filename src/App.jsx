import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./resources/store";
import GitHub from "./pages/index";

export const App = () => {
  const history = createBrowserHistory();

  const store = configureStore({}, history);

  return (
    <Provider store={store}>
      <GitHub />
    </Provider>
  );
};
