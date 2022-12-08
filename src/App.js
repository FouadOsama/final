import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import GameDetails from "./Components/Game Detalis/GameDetails";
import LogIn from "./Components/LogIn/LogIn";
import All from "./Components/All/All";
import Pc from "./Components/pc/pc";
import Platforms from "./Components/Platforms/Platforms";
import SortBy from "./Components/SortBy/SortBy";
import Catogeries from "./Components/Catogeries/Catogeries";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

function App() {
  let [userData, setUserData] = useState(null);
  function saveUser() {
    let token = localStorage.getItem("token");
    let decoded = jwt_decode(token);
    setUserData(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUser();
    }
  }, []);

  function ProtectedRoute(props) {
    if (localStorage.getItem("token") == null) {
      return <Navigate to={"/LogIn"} />;
    } else {
      return props.children;
    }
  }
  function logOut() {
    localStorage.removeItem("token")
    setUserData(null)
    return <Navigate to="/LogIn"/>
}
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout userData={userData} logOut={logOut} />,
      children: [
        { path: "Register", element: <Register /> },
        {
          path: "Home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/GameDetails/:Id",
          element: (
            <ProtectedRoute>
              {" "}
              <GameDetails />{" "}
            </ProtectedRoute>
          ),
        },
        { path: "LogIn", element: <LogIn saveUser={saveUser} /> },
        {
          path: "All",
          element: (
            <ProtectedRoute>
              {" "}
              <All />
            </ProtectedRoute>
          ),
        },
        {
          path: "platforms/:Id",
          element: (
            <ProtectedRoute>
              <Platforms />
            </ProtectedRoute>
          ),
        },
        {
          path: "Sort-By/:Id",
          element: (
            <ProtectedRoute>
              <SortBy />
            </ProtectedRoute>
          ),
        },
        {
          path: "Catogeries/:Id",
          element: (
            <ProtectedRoute>
              <Catogeries />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
