import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Provider } from "react-redux";
import store from "./redux/store";

import UploadHike from "./components/UploadHike/UploadHike";
import SelectButtons from "./components/SelectButtons/SelectButtons";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/uploadHike" element={<UploadHike />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
