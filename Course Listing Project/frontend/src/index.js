import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCourses from "./student/ViewCourses";
import ManageCourses from "./admin/ManageCourses";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import IndividualCourses from "./student/IndividualCourse";
import HelpPage from "./student/HelpPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewCourses />} />
        <Route path="/course/:id" element={<IndividualCourses />} />
        <Route path="/admin" element={<ManageCourses />} />
        <Route path="/support" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
