import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
