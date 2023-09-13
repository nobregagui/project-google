import React from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./context/DataContext";
import App from "./App";

import "./index.css";

const AppContainer = () => {
  return (
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("szb-app-root"));
