import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

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
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
