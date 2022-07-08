import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Registration from "./components/Register/Registration";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import Add from "./components/Add/Add";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setLoggedIn(true);
  }, [navigate]);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/gifs`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <Navigation setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Routes>
        <Route
          path="/"
          element={<HomePage data={data} loggedIn={loggedIn} />}
        />
        <Route path="/add" element={<Add loggedIn={loggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
