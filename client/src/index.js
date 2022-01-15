import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <main>
              <div>welcome to the party!</div>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
