import Router from "./routes/index.js";
import React from "react";
import { Provider } from "react-redux";
import { store } from "redux.js";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
