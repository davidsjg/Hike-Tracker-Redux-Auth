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
import Explore from "./components/Explore/Explore";
import MyHikes from "./components/MyHikes/MyHikes";
import SelectButtonsIndex from "./components/SelectButtonsIndex/SelectButtonsIndex";
import LogIn from "./components/LogIn/LogIn.js";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<SelectButtons />}>
            <Route index element={<SelectButtonsIndex />} />
            <Route path="/uploadHike" element={<UploadHike />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/myHikes" element={<MyHikes />} />
          </Route>
          <Route path="/signUp" element={<Auth />} />
          <Route path="/logIn" element={<LogIn />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
